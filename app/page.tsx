export default function Page() {
  const faqs = [
    {
      q: 'Which email providers are supported?',
      a: 'Gmail and Outlook via OAuth 2.0. We never store your email credentials — only short-lived access tokens.'
    },
    {
      q: 'How are retention policies configured?',
      a: 'Set per-domain or per-label rules (e.g. delete after 12 months). Policies run on a daily schedule and log every deletion.'
    },
    {
      q: 'What audit evidence do I get for regulators?',
      a: 'A timestamped CSV/PDF audit log per run, showing sender, subject hash, deletion date, and policy matched — ready for DPA requests.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold bg-[#161b22] border border-[#30363d] text-[#58a6ff] uppercase tracking-widest">
          GDPR Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-delete old customer emails<br />
          <span className="text-[#58a6ff]">before they become a liability</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect Gmail or Outlook, set retention rules, and let GDPR Email Purger silently delete expired customer data — with a full audit trail for every deletion.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start Free Trial — €19/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required for 14-day trial. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '🔍', title: 'Smart Scanning', desc: 'Identifies customer emails by domain, label, or keyword across your entire mailbox.' },
            { icon: '🗑️', title: 'Auto-Deletion', desc: 'Permanently removes emails past your configured retention window on a daily schedule.' },
            { icon: '📋', title: 'Audit Logs', desc: 'Every deletion is logged with timestamp, policy matched, and subject hash for regulators.' }
          ].map(f => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-extrabold text-white mb-1">€19</div>
          <div className="text-[#8b949e] text-sm mb-6">per month, per workspace</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Gmail + Outlook OAuth',
              'Unlimited retention policies',
              'Daily auto-deletion runs',
              'PDF + CSV audit logs',
              'Email alerts on each run',
              'Priority support'
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map(faq => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} GDPR Email Purger. Built for EU businesses.
      </footer>
    </main>
  )
}
