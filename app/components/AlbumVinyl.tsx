'use client'
import { useAudioContext } from '@/app/context/appState'
import { cn } from '@/app/lib/utils'
import { Songs } from '../lib/api-response'
import Image from 'next/image'

export default function AlbumVinyl() {
  const { pause, activeIndex } = useAudioContext()

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-semibold text-xl">Now playing</h1>
      <div className="w-[315px] h-[315px] relative z-10 customShadowMedium">
        <Image
          alt=""
          width={315}
          height={315}
          src={
            activeIndex !== undefined &&
            activeIndex !== null &&
            activeIndex >= 0 &&
            activeIndex < Songs.length
              ? Songs[activeIndex]?.image
              : ''
          }
          className="relative z-10 object-cover"
        />
        <div
          style={{
            backgroundImage: `url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/83141/vinyl.png'),
                       url(${
                         activeIndex !== undefined &&
                         activeIndex !== null &&
                         activeIndex >= 0 &&
                         activeIndex < Songs.length
                           ? Songs[activeIndex]?.image
                           : ''
                       })`
          }}
          className={cn(
            'vinyl rounded-full w-[300px] h-[300px] absolute top-[5px] left-2',
            {
              'is-playing': !pause
            }
          )}
        />
      </div>
    </div>
  )
}
