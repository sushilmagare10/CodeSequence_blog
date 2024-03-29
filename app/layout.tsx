import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider, } from '@/providers/theme-provider'
import SessionProvider from '@/providers/SessionProvider'
import Navbar from '@/components/Header/Navbar'
import Footer from '@/components/Footer/Footer'
import { ToastContainer } from 'react-toastify'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: "CodeSequence",
    template: "%s - CodeSequence"
  },
  description: 'Come and read my awesome articles about coding',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider>
            <Navbar />
            <div className='container'>
              <div className='wrapper'>
                {children}
              </div>
              <ToastContainer />
            </div>
            <Footer />
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
