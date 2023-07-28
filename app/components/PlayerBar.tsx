'use client'
import ChatTrigger from './ChatTrigger'
import VisualizerBar from './VisualizerBar'
import {
  SoundHigh,
  SoundOff,
  SkipPrev,
  SkipNext,
  Shuffle,
  Repeat,
  RepeatOnce
} from 'iconoir-react'
import { useAudioContext } from '../context/appState'
import { cn } from '@/app/lib/utils'
import { Songs } from '../lib/api-response'
import ProgressBar from './ProgressBar'
import QueueTrigger from './QueueTrigger'
import Image from 'next/image'
import ContextMenu from './ContextMenu'

export default function PlayerBar() {
  const {
    handleTimeUpdate,
    handleVolumeChange,
    handleVolumeToggle,
    currentTime,
    volume,
    pause,
    handleTogglePlay,
    audioRef,
    shuffle,
    repeat,
    handleShuffle,
    handleRepeat,
    activeIndex,
    handleSkipPrev,
    handleSkipNext
  } = useAudioContext()

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  return (
    <div className="w-full customShadowHigh container absolute left-0 right-0 ml-auto mr-auto bottom-6 gap-12 py-6 px-8 bg-white dark:bg-[#121212] rounded-[10px] z-20">
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate}>
        <source src="likeyou.mp3" type="audio/mpeg" />
      </audio>
      <div className="w-full grid grid-cols-3 gap-8 relative">
        <div />
        <div className="absolute left-4 bottom-4 gap-2 flex items-end">
          <div className="relative w-32 h-32">
            <Image
              className="rounded-full shadow-2xl border-2 border-white dark:border-zinc-800 object-cover"
              src={
                activeIndex !== undefined &&
                activeIndex !== null &&
                activeIndex >= 0 &&
                activeIndex < Songs.length
                  ? Songs[activeIndex]?.image
                  : ''
              }
              alt=""
              height={128}
              width={128}
            />
            <div className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-800 bg-[#d6dee7] dark:bg-[#383838] dark:shadow-inner absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="flex flex-col w-64 whitespace-nowrap overflow-hidden text-ellipsis">
            <ContextMenu
              name={
                activeIndex !== undefined &&
                activeIndex !== null &&
                activeIndex >= 0 &&
                activeIndex < Songs.length
                  ? Songs[activeIndex]?.name
                  : ''
              }
            >
              <h1 className="font-medium max-w-full cursor-pointer">
                {activeIndex !== undefined &&
                activeIndex !== null &&
                activeIndex >= 0 &&
                activeIndex < Songs.length
                  ? Songs[activeIndex]?.name
                  : undefined}
              </h1>
            </ContextMenu>
            <p className="opacity-70 text-xs">
              {activeIndex !== undefined &&
              activeIndex !== null &&
              activeIndex >= 0 &&
              activeIndex < Songs.length
                ? Songs[activeIndex]?.artists
                : undefined}
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 items-center justify-center">
          <div className="w-full flex flex-col gap-2 items-center justify-center">
            <p className="font-medium text-xs">
              {formatTime(currentTime ?? 0)}
            </p>
            <div className="w-full flex items-center justify-center gap-4 relative">
              <SkipPrev
                onClick={handleSkipPrev}
                className="hover:opacity-70 active:opacity-100 active:-translate-x-0.5 transition-all duration-300"
              />
              <VisualizerBar onClick={handleTogglePlay} pause={pause} />
              <SkipNext
                onClick={handleSkipNext}
                className="hover:opacity-70 active:opacity-100 active:translate-x-0.5 transition-all duration-300"
              />
            </div>
          </div>
          <ProgressBar audioRef={audioRef} />
        </div>
        <div className="flex items-center gap-2 justify-end">
          <Shuffle
            onClick={handleShuffle}
            className={cn(
              'opacity-50 hover:opacity-100 active:translate-y-0.5 transition-all duration-300',
              {
                'opacity-100': shuffle
              }
            )}
          />
          <button onClick={handleRepeat}>
            {repeat ? (
              <Repeat className="opacity-50 hover:opacity-100 active:translate-y-0.5 transition-all duration-300" />
            ) : (
              <RepeatOnce />
            )}
          </button>
          <ChatTrigger />
          <QueueTrigger />
          <button className="z-10" onClick={handleVolumeToggle}>
            {volume === 0 ? <SoundOff /> : <SoundHigh />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-16 range-slider appearance-none bg-gray-300 dark:bg-[#4d4d4d] h-1 rounded-lg focus:outline-none focus:bg-gray-500 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  )
}
