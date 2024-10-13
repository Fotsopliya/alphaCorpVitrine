import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import '@styles/globals.css'
import { Toaster } from "react-hot-toast"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className='main'>
        <div className='gradient' />
      </div>
      <main className='app'>
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-center" />
      </main>
    </>


  )
}
