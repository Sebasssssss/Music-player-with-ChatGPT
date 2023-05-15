export default function Navbar() {
  return (
    <header className="inline-flex items-center gap-4 w-full justify-between p-3">
      <h1 className="text-xl font-bold ml-8">BeatBrain</h1>
      <div className="inline-flex items-center gap-4">
        <a
          target="_blank"
          href="https://www.spotify.com/download/windows/"
          className="text-[#4a2560] w-max px-10 py-3 hover:bg-[#4a2560]/5 active:translate-y-0.5 active:bg-[#3f1f52]/10 outline-none rounded-md font-semibold transition-all duration-200"
        >
          Download the app
        </a>
        <a
          href="/pages/login"
          className="w-max px-10 py-3 bg-[#4a2560] hover:bg-[#4a2560]/90 active:translate-y-0.5 active:bg-[#3f1f52] outline-none customShadowMedium text-white rounded-md font-semibold transition-all duration-200"
        >
          Go to the player
        </a>
      </div>
    </header>
  )
}
