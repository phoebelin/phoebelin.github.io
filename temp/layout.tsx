import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wedding Guest Portal',
  description: 'A personalized wedding guest experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-b from-rose-50 to-white`}>
        <main className="container mx-auto px-4 py-8 max-w-md">
          {children}
        </main>
      </body>
    </html>
  )
} 