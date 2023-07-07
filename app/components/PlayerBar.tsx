'use client'
import { useState } from 'react'
import ChatTrigger from './ChatTrigger'
import ProgressBar from './ProgressBar'
import {
  SoundHigh,
  SoundOff,
  Playlist,
  SkipPrev,
  SkipNext,
  Shuffle,
  Repeat,
  RepeatOnce
} from 'iconoir-react'
import { useAudioContext } from '../providers/AppState'
import { cn } from '@/app/lib/utils'
import AudioPlayer from './AudioPlayer'

export default function PlayerBar() {
  const {
    handleTimeUpdate,
    handleVolumeChange,
    handleVolumeToggle,
    currentTime,
    volume,
    handleTogglePlay,
    audioRef,
    pause
  } = useAudioContext()

  const [repeat, setRepeat] = useState(true)
  const [shuffle, setShuffle] = useState(false)

  const handleShuffle = () => {
    setShuffle(!shuffle)
  }

  const handleRepeat = () => {
    setRepeat(!repeat)
  }

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  return (
    <div className="w-full shados container absolute left-0 right-0 ml-auto mr-auto bottom-6 gap-12 py-6 px-8 bg-white rounded-[10px] z-20">
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate}>
        <source src="likeyou.mp3" type="audio/mpeg" />
      </audio>
      <div className="w-full grid grid-cols-3 gap-8">
        <div />
        <div className="w-full flex flex-col gap-4 items-center justify-center">
          <div className="w-full flex flex-col gap-2 items-center justify-center">
            <p className="font-medium text-xs">
              {formatTime(currentTime ?? 0)}
            </p>
            <div className="w-full flex items-center justify-center gap-4 relative">
              <SkipPrev className="hover:opacity-70 active:opacity-100 transition-opacity duration-300" />
              <ProgressBar
                audioRef={audioRef}
                onClick={handleTogglePlay}
                pause={pause}
              />
              <SkipNext className="hover:opacity-70 active:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
          <AudioPlayer audioRef={audioRef} />
        </div>
        <div className="flex items-center gap-2 justify-end">
          <Shuffle
            onClick={handleShuffle}
            className={cn(
              'opacity-70 hover:opacity-90 transition-opacity duration-300',
              {
                'opacity-100': shuffle
              }
            )}
          />
          <button onClick={handleRepeat}>
            {repeat ? (
              <Repeat className="opacity-70 hover:opacity-100 transition-opacity duration-300" />
            ) : (
              <RepeatOnce />
            )}
          </button>
          <ChatTrigger />
          <button className="disabled:opacity-40" disabled>
            <Playlist />
          </button>
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
            className="w-16 range-slider appearance-none bg-gray-300 h-1 rounded-lg focus:outline-none focus:bg-gray-500 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  )
}
