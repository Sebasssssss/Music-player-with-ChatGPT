import { useRef, useState } from 'react'

export default function useAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [pause, setPause] = useState(false)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [duration, setDuration] = useState<number>(0)
  const [volume, setVolume] = useState<number>(1)

  const handleTimeUpdate = () => {
    const audioElement = audioRef.current
    if (audioElement) {
      setCurrentTime(audioElement.currentTime)
    }
  }

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(event.target.value)
    const audioElement = audioRef.current
    if (audioElement) {
      audioElement.currentTime = time
      setCurrentTime(time)
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
    handleTimeUpdate,
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
