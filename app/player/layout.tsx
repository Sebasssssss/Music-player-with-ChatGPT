import Chat from '../components/Chat'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Chat />
      {children}
    </div>
  )
}
