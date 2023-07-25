'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Playlist, playlists } from '@/app/lib/api-response'
import Image from 'next/image'
import ListOfSongs from '../../../components/ListOfSongs'
import LikeButton from '@/app/components/LikeButton'
import background from '@/public/background.webp'
import blackBack from '@/public/blackBack.webp'
import { useThemeContext } from '@/app/context/themeContext'

export default function Player() {
  const pathname = usePathname()
  const value = pathname.split('/').pop()
  const [loading, setLoading] = useState(true)
  const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | null>(
    null
  )
  const { isDarkMode } = useThemeContext()

  const playlist = playlists.find(playlist => playlist.id === value)
  useEffect(() => {
    if (playlist) {
      setSelectedPlaylist(playlist)
    }
  }, [playlist])

  const handleLoading = () => {
    setLoading(false)
  }

  return (
    <div className="overflow-hidden w-full h-screen">
      <div className="flex flex-col lg:flex-row h-screen items-center justify-center w-full gap-2">
        <Image
          alt="albumCover background"
          src={selectedPlaylist?.images[0]?.url || ''}
          width={100}
          height={100}
          className="not-selectable opacity-80 -z-20 w-screen h-screen absolute ml-auto mr-auto right-0 left-0 bottom-[128px] text-center"
          onLoad={handleLoading}
        />
        <Image
          alt="Blurred background mask"
          src={isDarkMode ? blackBack : background}
          width={100}
          height={100}
          className="not-selectable -z-20 opacity-100 w-screen h-screen absolute ml-auto mr-auto right-0 left-0 text-center"
        />
        <div className="absolute top-0 left-0 w-full h-screen backdrop-blur-xl bg-white/20 dark:bg-black/20 -z-10"></div>
        <div className="flex flex-col items-center mx-12 relative">
          {loading ? (
            <div
              className={`w-[400px] h-[400px] bg-gray-200 dark:bg-zinc-700 animate-pulse relative rounded-[30px] after:rounded-[30px] after:content-["''"] after:h-[50%] after:absolute after:-bottom-[51%] after:bg-bottom after:bg-cover after:opacity-50 after:blur-[2px] before:rounded-[30px] before:h-[52%] before:absolute before:-bottom-[52%] before:z-10 before:blur-[2px] reflected`}
            />
          ) : (
            <div
              style={{
                backgroundImage: `url(${selectedPlaylist?.images[0]?.url})`
              }}
              className={`w-[400px] h-[400px] relative bg-bottom bg-cover rounded-[30px] after:rounded-[30px] after:content-["''"] after:h-[50%] after:absolute after:-bottom-[51%] after:bg-bottom after:bg-cover after:opacity-50 after:blur-[2px] before:rounded-[30px] before:h-[52%] before:absolute before:-bottom-[52%] before:z-10 before:blur-[2px] reflected`}
            />
          )}
        </div>
        <div className="flex flex-col">
          <div className="flex w-full justify-between py-4 px-6">
            <h1 className="text-xl font-bold flex flex-col">
              {decodeURI(selectedPlaylist?.name || '')}
              <span className="text-xs">
                2018 • {selectedPlaylist?.tracks.total} songs • 1 hr 8 min
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
