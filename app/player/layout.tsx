import Audiobar from '../components/Audiobar'
import ChatTrigger from '../components/ChatTrigger'
import Sidebar from '../components/Sidebar'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Sidebar />
      {children}
      <ChatTrigger />
      <Audiobar />
    </div>
  )
}
