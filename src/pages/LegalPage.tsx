export function PrivacyPage() {
  return (
    <Legal
      title="Privacy Policy"
      body="Placeholder privacy policy. Replace with your legal counsel’s approved text covering data collection, cookies, and contact handling."
    />
  )
}

export function TermsPage() {
  return (
    <Legal
      title="Terms & Conditions"
      body="Placeholder terms. Replace with your approved terms of use for the Techtoil website and services."
    />
  )
}

function Legal({ title, body }: { title: string; body: string }) {
  return (
    <div className="px-4 py-14 md:px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-3xl font-bold">{title}</h1>
        <p className="mt-4 text-muted leading-relaxed">{body}</p>
      </div>
    </div>
  )
}

export function NotFoundPage() {
  return (
    <div className="px-4 py-24 text-center">
      <h1 className="font-display text-4xl font-bold">404</h1>
      <p className="mt-2 text-muted">This page is not part of the growth ecosystem.</p>
      <a href="/" className="mt-6 inline-block text-cyan font-bold">
        Back home
      </a>
    </div>
  )
}
