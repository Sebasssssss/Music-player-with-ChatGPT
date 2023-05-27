import Providers from '@/app/components/Providers'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from './components/Sidebar'
import Audiobar from './components/Audiobar'
import ChatTrigger from './components/ChatTrigger'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chatbot',
  description: 'Chatbot with chatgpt'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
        <Sidebar />
        <body className={inter.className}>{children}</body>
        <ChatTrigger />
        <Audiobar />
      </Providers>
    </html>
  )
}
