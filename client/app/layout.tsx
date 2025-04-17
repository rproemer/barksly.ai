import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Barksly.aii',
  description: 'AI for pets',
  generator: 'sylys.ai',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
