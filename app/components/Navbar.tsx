import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="inline-flex items-center gap-4 w-full justify-between p-3">
      <Link href="/" className="text-xl font-bold ml-8">
        BeatBrain
      </Link>
      <div className="inline-flex items-center gap-4">
        <Link
          target="_blank"
          href="https://www.spotify.com/download/"
          className="text-[#4a2560] w-max px-10 py-3 hover:bg-[#4a2560]/5 active:translate-y-0.5 active:bg-[#3f1f52]/10 outline-none rounded-md font-semibold transition-all duration-200"
        >
          Download the app
        </Link>
        <Link
          href="/"
          className="w-max px-10 py-3 bg-[#4a2560] hover:bg-[#4a2560]/90 active:translate-y-0.5 active:bg-[#3f1f52] outline-none customShadowMedium text-white rounded-md font-semibold transition-all duration-200"
        >
          Go to the player
        </Link>
      </div>
    </header>
  )
}
