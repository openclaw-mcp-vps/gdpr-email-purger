import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GDPR Email Purger — Auto-delete old customer emails for compliance',
  description: 'Scan Gmail and Outlook for customer data past retention periods. Auto-delete expired emails with full audit logs for GDPR compliance reporting.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="841da305-d12c-491b-af11-fe7f625d18c3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
