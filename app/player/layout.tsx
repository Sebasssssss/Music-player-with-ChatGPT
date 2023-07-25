import PlayerBar from '../components/PlayerBar'
import Sidebar from '../components/Sidebar'
import { ThemeProvider } from '../context/themeContext'
import { AudioProvider } from '../context/appState'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="text-black dark:text-zinc-300 transition-colors duration-500">
      <ThemeProvider>
        <AudioProvider>
          <Sidebar />
          {children}
          <PlayerBar />
        </AudioProvider>
      </ThemeProvider>
    </div>
  )
}
