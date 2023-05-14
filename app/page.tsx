import { IcoSpotify } from './components/Icons'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row h-screen justify-between items-center w-full gap-8 bg-no-repeat container mx-auto">
        <div className="blob-cont">
          <div className="yellow blob"></div>
          <div className="red blob"></div>
          <div className="green blob"></div>
        </div>
        <div className="grid place-items-center absolute ml-auto mr-auto left-0 right-0 text-center py-12">
          <div className="w-80 text-center flex flex-col gap-8 items-center">
            <h1 className="text-5xl font-bold">
              Let&apos;s listen to some music
            </h1>
            <button className="w-max px-10 py-3 inline-flex items-center gap-2 bg-[#4a2560] hover:bg-[#4a2560]/90 active:translate-y-0.5 active:bg-[#3f1f52] outline-none customShadowMedium text-white rounded-md font-semibold transition-all duration-200">
              Login with Spotify <IcoSpotify />
            </button>
          </div>
        </div>
        <div />
      </div>
    </>
  )
}
