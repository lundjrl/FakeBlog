import { Inter } from 'next/font/google'

import './globals.css'

// Init your font here
const inter = Inter({ subsets: ['latin'] })

// Export metadata for SEO here
export const metadata = {
  title: 'Fake Blog',
  description: 'Fake Blog project showing off some cool Next.js 13 concepts.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
