export function PrivacyPage() {
  return (
    <Legal
      title="Privacy Policy"
      body="Placeholder privacy policy. Replace with counsel-approved text for how Techtoil handles inquiries and site data."
    />
  )
}

export function TermsPage() {
  return (
    <Legal
      title="Terms"
      body="Placeholder terms of use. Replace with your approved terms for the Techtoil website."
    />
  )
}

function Legal({ title, body }: { title: string; body: string }) {
  return (
    <div className="px-4 pb-20 pt-28 md:px-6 md:pt-32">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-3xl font-extrabold tracking-tight">{title}</h1>
        <p className="mt-4 leading-relaxed text-mute">{body}</p>
      </div>
    </div>
  )
}

export function NotFoundPage() {
  return (
    <div className="px-4 py-32 text-center">
      <h1 className="font-display text-4xl font-extrabold">Page not found</h1>
      <a href="/" className="mt-6 inline-block font-bold text-accent">
        Back home
      </a>
    </div>
  )
}
