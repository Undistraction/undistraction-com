import type { Metadata } from 'next'
import './globals.css'
import SiteLayout from '../layouts/SiteLayout'

export const metadata: Metadata = {
  title: 'Site for front-end developer Pedr Browne',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="bg-gray-950"
    >
      <head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/ogo5qce.css"
        />
      </head>
      <body className="bg-gray-950 antialiased">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  )
}
