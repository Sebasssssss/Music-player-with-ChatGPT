import { IcoSpotify } from './components/Icons'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center w-full">
        <div className="filter absolute -top-[50px] -left-[300px] w-full h-full overflow-hidden -z-20">
          <div className="gradient blob gradient-1"></div>
          <div className="gradient blob gradient-2"></div>
          <div className="gradient blob gradient-3"></div>
        </div>
        <div className="grid place-items-center absolute ml-auto mr-auto left-0 right-0 text-center py-12">
          <div className="w-max text-center flex flex-col gap-8 items-center text-zinc-900">
            <h1 className="text-7xl font-bold flex flex-col">
              Get lost in the music
              <span className="text-xl">
                - start streaming on our web player today.
              </span>
            </h1>
            <button className="w-max px-10 py-3 inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-900/90 active:translate-y-0.5 active:bg-black outline-none customShadowButton text-white rounded-md font-semibold transition-all duration-200">
              Login with Spotify <IcoSpotify />
            </button>
          </div>
        </div>
        <div />
      </div>
      <svg>
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            stitchTiles="stitch"
          />
          <feColorMatrix
            in="colorNoise"
            type="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
          />
          <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
        </filter>
      </svg>
    </>
  )
}
