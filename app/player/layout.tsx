import PlayerBar from '../components/PlayerBar'
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
        <PlayerBar />
      </AudioProvider>
    </div>
  )
}
