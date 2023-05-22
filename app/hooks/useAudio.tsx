import { useRef, useState, useEffect } from 'react'

export default function useAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [pause, setPause] = useState(false)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [duration, setDuration] = useState<number>(0)
  const [volume, setVolume] = useState<number>(1)

  useEffect(() => {
    const audioElement = audioRef.current

    const handleTimeUpdate = () => {
      if (audioElement) {
        setCurrentTime(audioElement.currentTime)
      }
    }

    const handleLoadedData = () => {
      if (audioElement) {
        setDuration(audioElement.duration)
      }
    }

    audioElement?.addEventListener('timeupdate', handleTimeUpdate)
    audioElement?.addEventListener('loadeddata', handleLoadedData)

    return () => {
      audioElement?.removeEventListener('timeupdate', handleTimeUpdate)
      audioElement?.removeEventListener('loadeddata', handleLoadedData)
    }
  }, [])

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = e.target.valueAsNumber
    if (audioRef.current) {
      audioRef.current.currentTime = (duration / 100) * seekTime
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const volumeLevel = e.target.valueAsNumber
    if (audioRef.current) {
      audioRef.current.volume = volumeLevel
      setVolume(volumeLevel)
    }
  }

  const handlePlay = () => {
    setPause(true)
    audioRef.current?.play()
  }

  const handlePause = () => {
    setPause(false)
    audioRef.current?.pause()
  }

  return {
    handleVolumeChange,
    handleSeek,
    currentTime,
    duration,
    volume,
    handlePlay,
    handlePause,
    audioRef,
    pause
  }
}
