import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Site for front-end developer Pedr Browne",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ogo5qce.css" />
      </head>
      <body className={`antialiased`}>{children}</body>
    </html>
  )
}
