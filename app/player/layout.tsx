import Audiobar from '../components/Audiobar'
import ChatTrigger from '../components/ChatTrigger'
import Sidebar from '../components/Sidebar'
import { AudioProvider } from '../providers/AppState'
import './styles.css'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <AudioProvider>
        <Sidebar />
        {children}
        <ChatTrigger />
        <Audiobar />
      </AudioProvider>
    </div>
  )
}
