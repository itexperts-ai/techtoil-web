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
    <div className="bg-bg px-4 pb-20 pt-32 md:px-6">
      <div className="mx-auto max-w-2xl">
        <h1 className="title">{title}</h1>
        <p className="mt-4 leading-relaxed text-mute">{body}</p>
      </div>
    </div>
  )
}

export function NotFoundPage() {
  return (
    <div className="px-4 py-32 text-center">
      <h1 className="title">Page not found</h1>
      <a href="/" className="mt-6 inline-block font-semibold text-rose">
        Back home
      </a>
    </div>
  )
}
