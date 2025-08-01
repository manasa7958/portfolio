import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Manasa Praveen',
  description: 'Portfolio – CS & Math double major, building cool data-driven tools',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 text-gray-800 font-sans">
        {children}
      </body>
    </html>
  )
}
