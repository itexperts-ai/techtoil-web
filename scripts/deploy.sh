#!/usr/bin/env bash
set -euo pipefail

# Deploy Techtoil static site to VPS (nginx + optional certbot)
#
#   sudo ./scripts/deploy.sh
#   sudo ./scripts/deploy.sh --init-env 'github_pat_…'
#   sudo ./scripts/deploy.sh --skip-git
#   sudo ./scripts/deploy.sh --ssl

APP_NAME="techtoil-web"
BRANCH="${DEPLOY_BRANCH:-main}"
SKIP_GIT="${DEPLOY_SKIP_GIT:-0}"
INIT_ENV_TOKEN="${DEPLOY_INIT_ENV_TOKEN:-}"
ENABLE_SSL="${DEPLOY_SSL:-0}"
DOMAIN="${DEPLOY_DOMAIN:-techtoil.itexperts.org.in}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
DEPLOY_ENV_FILE="${SCRIPT_DIR}/deploy.env"
NGINX_SRC="${SCRIPT_DIR}/nginx-techtoil-web.conf"
NGINX_AVAIL="/etc/nginx/sites-available/${APP_NAME}"
NGINX_ENABLED="/etc/nginx/sites-enabled/${APP_NAME}"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --skip-git) SKIP_GIT=1; shift ;;
    --ssl) ENABLE_SSL=1; shift ;;
    --domain) DOMAIN="$2"; shift 2 ;;
    --init-env)
      INIT_ENV_TOKEN="$2"
      shift 2
      ;;
    -h|--help)
      sed -n '3,12p' "$0"
      exit 0
      ;;
    *) echo "Unknown option: $1"; exit 1 ;;
  esac
done

log() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*"; }

write_deploy_env() {
  local token="$1"
  umask 077
  cat > "${DEPLOY_ENV_FILE}" <<EOF
GIT_USERNAME=itexperts-ai
GIT_TOKEN=${token}
EOF
  chmod 600 "${DEPLOY_ENV_FILE}"
  log "Wrote ${DEPLOY_ENV_FILE}"
}

load_deploy_env() {
  [[ -f "${DEPLOY_ENV_FILE}" ]] || return 0
  set -a
  # shellcheck disable=SC1090
  source <(sed 's/\r$//' "${DEPLOY_ENV_FILE}")
  set +a
  GIT_USERNAME="${GIT_USERNAME:-itexperts-ai}"
  GIT_TOKEN="${GIT_TOKEN:-${GITHUB_TOKEN:-}}"
  export GIT_USERNAME GIT_TOKEN
  [[ -n "${GIT_TOKEN}" ]] && log "Loaded GIT_TOKEN"
}

setup_askpass() {
  local askpass
  askpass="$(mktemp /tmp/tt-git-askpass.XXXXXX)"
  cat > "${askpass}" <<'ASKPASS'
#!/usr/bin/env bash
case "${1:-}" in
  *Username*|*username*) printf '%s\n' "${GIT_USERNAME:-itexperts-ai}" ;;
  *) printf '%s\n' "${GIT_TOKEN}" ;;
esac
ASKPASS
  chmod 700 "${askpass}"
  export GIT_ASKPASS="${askpass}"
  export GIT_TERMINAL_PROMPT=0
  trap "rm -f '${askpass}'" EXIT
}

cd "${APP_DIR}"
git config --global --add safe.directory "${APP_DIR}" 2>/dev/null || true

if [[ -n "${INIT_ENV_TOKEN}" ]]; then
  write_deploy_env "${INIT_ENV_TOKEN}"
fi
load_deploy_env

if [[ "${SKIP_GIT}" != "1" && -d .git ]]; then
  if [[ -z "${GIT_TOKEN:-}" ]]; then
    log "ERROR: No GIT_TOKEN — run with --init-env 'PAT' or --skip-git"
    exit 1
  fi
  setup_askpass
  log "Git sync → origin/${BRANCH}"
  git -c credential.helper= fetch --prune origin "${BRANCH}"
  git checkout "${BRANCH}"
  git reset --hard "origin/${BRANCH}"
  log "Git OK → $(git rev-parse --short HEAD)"
fi

log "Installing deps + building…"
unset NODE_ENV
npm ci --include=dev
npm run build

if [[ ! -f "${APP_DIR}/dist/index.html" ]]; then
  log "ERROR: dist/index.html missing"
  exit 1
fi

# nginx (www-data) must be able to traverse/read dist
chmod -R a+rX "${APP_DIR}/dist"

log "Ensuring TLS material for ${DOMAIN}…"
mkdir -p /etc/ssl/techtoil
if [[ ! -f /etc/ssl/techtoil/fullchain.pem || ! -f /etc/ssl/techtoil/privkey.pem ]]; then
  openssl req -x509 -nodes -days 825 -newkey rsa:2048 \
    -keyout /etc/ssl/techtoil/privkey.pem \
    -out /etc/ssl/techtoil/fullchain.pem \
    -subj "/CN=${DOMAIN}/O=Techtoil/C=IN"
  chmod 600 /etc/ssl/techtoil/privkey.pem
  log "Created self-signed cert (replace with Let's Encrypt after DNS A record exists)"
fi

log "Configuring nginx for ${DOMAIN}…"
sed "s/techtoil.itexperts.org.in/${DOMAIN}/g" "${NGINX_SRC}" > "${NGINX_AVAIL}"
ln -sfn "${NGINX_AVAIL}" "${NGINX_ENABLED}"

# Direct port access works even when public DNS is missing
cat > /etc/nginx/sites-available/techtoil-web-port <<'PORTCONF'
server {
    listen 3088;
    listen [::]:3088;
    server_name _;
    root /var/www/techtoil-web/dist;
    index index.html;
    location / {
        try_files $uri $uri/ /index.html;
    }
}
PORTCONF
ln -sfn /etc/nginx/sites-available/techtoil-web-port /etc/nginx/sites-enabled/techtoil-web-port
ufw allow 3088/tcp >/dev/null 2>&1 || true

nginx -t
systemctl reload nginx

if [[ "${ENABLE_SSL}" == "1" ]]; then
  if dig +short "${DOMAIN}" A @8.8.8.8 | grep -qE '^[0-9.]+$'; then
    log "Requesting / renewing Let's Encrypt cert for ${DOMAIN}…"
    certbot --nginx -d "${DOMAIN}" --non-interactive --agree-tos --register-unsafely-without-email --redirect || true
  else
    log "SKIP Let's Encrypt — ${DOMAIN} has no public A record (NXDOMAIN). Add DNS first."
  fi
fi

if curl -sf --max-time 5 "http://127.0.0.1:3088/" >/dev/null 2>&1 \
  || curl -skf --max-time 5 --resolve "${DOMAIN}:443:127.0.0.1" "https://${DOMAIN}/" >/dev/null 2>&1; then
  log "Health check OK"
else
  log "WARN: health check inconclusive — verify DNS + nginx"
fi

log "Deploy complete."
log "Direct: http://$(curl -s --max-time 3 ifconfig.me 2>/dev/null || hostname -I | awk '{print $1}'):3088/"
log "HTTP:  http://${DOMAIN}/  (needs DNS A → this VPS)"
log "HTTPS: https://${DOMAIN}/ (needs DNS A → this VPS)"
