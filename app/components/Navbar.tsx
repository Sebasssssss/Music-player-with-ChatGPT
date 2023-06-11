import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 inline-flex items-center gap-4 w-full justify-between p-3">
      <Link href="/" className="text-xl font-bold ml-8">
        BeatBrain
      </Link>
      <div className="inline-flex items-center gap-4">
        <Link
          target="_blank"
          href="https://www.spotify.com/download/"
          className="text-zinc-900 w-max px-10 py-3 hover:bg-zinc-900/5 active:translate-y-0.5 active:bg-zinc-900/10 outline-none rounded-md font-semibold transition-all duration-200"
        >
          Download the app
        </Link>
        <Link
          href="/player"
          className="w-max px-10 py-3 bg-zinc-900 hover:bg-zinc-900/90 active:translate-y-0.5 active:bg-black outline-none customShadowMedium text-white rounded-md font-semibold transition-all duration-200"
        >
          Go to the player
        </Link>
      </div>
    </header>
  )
}
