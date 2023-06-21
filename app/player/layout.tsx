import Audiobar from '../components/Audiobar'
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
        <Audiobar />
      </AudioProvider>
    </div>
  )
}
