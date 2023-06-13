'use client'
import Image from 'next/image'
import background from '@/public/background.png'
import ListOfSongs from '../../../components/ListOfSongs'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Playlist, Songs, playlists } from '@/app/lib/api-response'
import { Play, Pause, SkipNext, SkipPrev } from 'iconoir-react'
import { useAudioContext } from '@/app/providers/AppState'
import LikeButton from '@/app/components/LikeButton'

export default function Player() {
  const { handleTogglePlay, pause } = useAudioContext()
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()
  const value = pathname.split('/').pop()
  const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | null>(
    null
  )

  const playlist = playlists.find(playlist => playlist.id === value)
  useEffect(() => {
    if (playlist) {
      setSelectedPlaylist(playlist)
    }
  }, [playlist])

  return (
    <div className="overflow-hidden w-full h-screen">
      <div className="flex flex-col lg:flex-row h-screen items-center justify-center w-full gap-2">
        <Image
          alt="albumCover"
          src={selectedPlaylist?.images[0]?.url || ''}
          width={100}
          height={100}
          className="not-selectable opacity-80 -z-20 w-screen h-screen absolute ml-auto mr-auto right-0 left-0 bottom-[128px] text-center"
        />
        <Image
          alt="albumCover"
          src={background}
          width={100}
          height={100}
          className="not-selectable -z-20 opacity-95 w-screen h-screen absolute ml-auto mr-auto right-0 left-0 text-center"
        />
        <div className="absolute top-0 left-0 w-full h-screen backdrop-blur-xl bg-gray-100/20 -z-10"></div>
        <div className="flex flex-col items-center px-12 relative">
          <Image
            alt="albumCover"
            src={selectedPlaylist?.images[0]?.url || ''}
            width={400}
            height={400}
            className={`${
              isLoading ? 'grayscale blur-sm' : 'grayscale-0 blur-0'
            } duration-700 ease-in-out rounded-[32px] aspect-square z-10 not-selectable`}
            onLoadingComplete={() => setIsLoading(false)}
          />
          <Image
            alt="Blurred Shadow albumCover"
            src={selectedPlaylist?.images[0]?.url || ''}
            width={400}
            height={400}
            className={`${
              isLoading ? 'grayscale blur-sm' : 'grayscale-0 blur-0'
            } duration-700 ease-in-out rounded-[32px] not-selectable aspect-square absolute bottom-0 blur-2xl opacity-60`}
            onLoadingComplete={() => setIsLoading(false)}
          />
          <div className="absolute -bottom-16 inline-flex items-center gap-12">
            <SkipPrev />
            <button
              onClick={handleTogglePlay}
              className="hover:opacity-80 transition-opacity duration-200"
            >
              {pause ? (
                <Play className="w-8 h-8" />
              ) : (
                <Pause className="w-8 h-8" />
              )}
            </button>
            <SkipNext />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex w-full justify-between py-4 px-6">
            <h1 className="text-xl font-bold flex flex-col">
              {decodeURI(selectedPlaylist?.name)}
              <span className="text-xs">
                {selectedPlaylist?.description}
                <br /> 2018 • {Songs.length} songs
              </span>
            </h1>
            <LikeButton />
          </div>
          <ListOfSongs />
        </div>
      </div>
    </div>
  )
}
