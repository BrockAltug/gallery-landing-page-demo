import type React from "react"
import type { Metadata } from "next"
import { Crimson_Text, Source_Sans_3, Dancing_Script, Playfair_Display } from "next/font/google"
import "./globals.css"

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-crimson",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-source",
})


const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dancing",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Artisan Studio - Handcrafted with Love",
  description: "Discover our collection of handmade treasures, crafted with care and inspired by nature.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${crimsonText.variable} ${sourceSans.variable} ${dancingScript.variable} ${playfairDisplay.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
