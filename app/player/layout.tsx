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
        <div className="flex w-full h-screen transition duration-500">
          <Sidebar />
          {children}
        </div>
        <div className="flex justify-center items-center w-full absolute left-0 bottom-6 gap-12 px-8">
          <Audiobar />
          <ChatTrigger />
        </div>
      </AudioProvider>
    </div>
  )
}
