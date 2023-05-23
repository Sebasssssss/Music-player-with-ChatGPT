'use client'
import { SoundHigh, Pause, Play } from 'iconoir-react'
import useAudio from '../hooks/useAudio'

export default function Audiobar() {
  const {
    handleTimeUpdate,
    handleVolumeChange,
    handleSeek,
    currentTime,
    volume,
    handlePlay,
    handlePause,
    audioRef,
    pause
  } = useAudio()

  return (
    <div className="w-full shados container absolute bottom-6 left-12 right-0 ml-auto mr-auto py-9 px-8 bg-white rounded-[10px] z-10">
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate}>
        <source src="likeyou.mp3" type="audio/mpeg" />
      </audio>
      <div className="w-full flex items-center gap-8">
        <button type="button">
          {pause ? (
            <Pause onClick={handlePause} />
          ) : (
            <Play onClick={handlePlay} />
          )}
        </button>
        <input
          type="range"
          min="0"
          step="0.1"
          max={audioRef.current?.duration || 0}
          value={currentTime}
          onChange={handleSeek}
          className="range-slider w-full appearance-none bg-gray-200 h-1 rounded-lg focus:outline-none active:bg-gray-300"
        />
        <div className="group flex items-center gap-2">
          <SoundHigh className="z-10" />
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
