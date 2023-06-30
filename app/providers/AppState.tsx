'use client'
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'

interface AudioContextValue {
  audioRef?: React.RefObject<HTMLAudioElement | null>
  currentTime?: number
  volume?: number
  pause?: boolean
  setVolume?: React.Dispatch<React.SetStateAction<number>>
  handleTimeUpdate?: () => void
  handleSeek?: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleVolumeChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleTogglePlay?: () => void
  handleVolumeToggle?: () => void
}

const AudioContext = createContext<AudioContextValue | undefined>(undefined)

export const AudioProvider = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(() => {
    if (typeof localStorage !== 'undefined') {
      const savedVolume = localStorage.getItem('volume')
      return savedVolume !== null ? parseFloat(savedVolume) : 1
    }
    return 1
  })
  const [pause, setPause] = useState(true)
  const audioElement = audioRef.current

  const handleTimeUpdate = () => {
    if (audioElement) {
      setCurrentTime(audioElement.currentTime)
      if (audioElement.currentTime === audioElement.duration) {
        setCurrentTime(0)
        setPause(true)
      }
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value)
    if (audioElement) {
      audioElement.currentTime = time
      setCurrentTime(time)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const volumeLevel = e.target.valueAsNumber
    setTimeout(() => localStorage.setItem('volume', volumeLevel), 500)
    if (audioRef.current) {
      audioRef.current.volume = volumeLevel
      setVolume(volumeLevel)
    }
  }

  const handleVolumeToggle = () => {
    const localStorageVolume = localStorage.getItem('volume')
    if (volume === 0 && localStorageVolume !== '0') {
      if (localStorageVolume !== null) {
        const parsedVolume = parseFloat(localStorageVolume)
        setVolume(parsedVolume)
        if (audioRef.current) {
          audioRef.current.volume = parsedVolume
        }
      }
    } else {
      setVolume(0)
      if (audioRef.current) {
        audioRef.current.volume = 0
      }
    }
  }

  const handleTogglePlay = useCallback(() => {
    if (pause) {
      setPause(false)
      audioRef.current?.play()
    } else {
      setPause(true)
      audioRef.current?.pause()
    }
  }, [pause])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        handleTogglePlay()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleTogglePlay])

  const contextValue: AudioContextValue = {
    audioRef,
    currentTime,
    volume,
    pause,
    setVolume,
    handleTimeUpdate,
    handleSeek,
    handleVolumeChange,
    handleVolumeToggle,
    handleTogglePlay
  }

  return (
    <AudioContext.Provider value={contextValue}>
      {children}
    </AudioContext.Provider>
  )
}

export const useAudioContext = (): AudioContextValue => {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error('useAudioContext must be used within an AudioProvider')
  }
  return context
}
