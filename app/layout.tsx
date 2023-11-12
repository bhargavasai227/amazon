import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import { Providers } from "./redux/provider";
import Navbar from "./Navbar"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amazon',
  description: 'Amazon protucts page replica',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">      
    <body className={inter.className}>
     <Navbar/>
     
    <Providers>{children}</Providers>
 
      </body>
    </html>
  
  )
}
