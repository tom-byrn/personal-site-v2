// app/layout.tsx
import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import MouseMoveEffect from "@/components/move-mouse-effect"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tom Byrne",
  description: "Personal portfolio site",
  icons: {
    icon: "/terminal.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <MouseMoveEffect />
        {children}
      </body>
    </html>
  )
}
