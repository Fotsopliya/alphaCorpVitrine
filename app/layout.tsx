import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import ActiveSectionContextProvider from '@context/active-section-context'
import '@styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alpha Corp',
  description: 'Innovating for a better future',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>
          <ActiveSectionContextProvider>
            <Navbar />
            {children}
            <Footer />
            <Toaster position="top-center"/>
          </ActiveSectionContextProvider>
        </main>
      </body>
    </html>
  )
}
