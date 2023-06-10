'use client'
import Image from 'next/image'
import background from '@/public/background.png'
import ListOfSongs from '../../../components/ListOfSongs'
import { Songs } from '../../../lib/itemsList'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Playlist, playlists } from '@/app/lib/api-response'

export default function Player() {
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
      <div className="flex h-screen items-center justify-center w-full gap-2">
        <Image
          alt="albumCover"
          src={selectedPlaylist?.images[0]?.url}
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
            src={selectedPlaylist?.images[0]?.url}
            width={400}
            height={400}
            className={`${
              isLoading ? 'grayscale blur-sm' : 'grayscale-0 blur-0'
            } duration-700 ease-in-out rounded-[32px] aspect-square z-10`}
            onLoadingComplete={() => setIsLoading(false)}
          />
          <Image
            alt="albumCover"
            src={selectedPlaylist?.images[0]?.url}
            width={400}
            height={400}
            className={`${
              isLoading ? 'grayscale blur-sm' : 'grayscale-0 blur-0'
            } duration-700 ease-in-out rounded-[32px] aspect-square absolute bottom-0 blur-2xl opacity-60`}
            onLoadingComplete={() => setIsLoading(false)}
          />
        </div>
        <div>
          <h1 className="text-xl font-bold flex flex-col py-4 px-6">
            {decodeURI(selectedPlaylist?.name)}
            <span className="text-sm">2018 • {Songs.length} songs</span>
          </h1>
          <ListOfSongs />
        </div>
      </div>
    </div>
  )
}
