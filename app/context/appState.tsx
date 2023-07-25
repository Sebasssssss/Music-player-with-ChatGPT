'use client'
import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'
import { Songs } from '../lib/api-response'

interface AudioContextValue {
  audioRef: any
  currentTime: number
  shuffle: boolean
  repeat: boolean
  volume: number
  activeIndex: number | null
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>
  isPlaying: boolean
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
  pause: boolean
  setPause?: React.Dispatch<React.SetStateAction<boolean>>
  setVolume: React.Dispatch<React.SetStateAction<number>>
  handleTimeUpdate: () => void
  handleSeek: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleTogglePlay: () => void
  handleVolumeToggle: () => void
  handleShuffle: () => void
  handleRepeat: () => void
  handlePlaySong: (index: number) => void
  handleDoubleClick: (index: number) => void
  handleSkipNext: () => void
  handleSkipPrev: () => void
  handleIsPlaying: () => void
}

const AudioContext = createContext<AudioContextValue | undefined>(undefined)

interface AudioProviderProps {
  children: ReactNode
}

export const AudioProvider: React.FC<AudioProviderProps> = ({ children }) => {
  const audioRef = useRef<any>(null)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [volume, setVolume] = useState<number>(() => {
    if (typeof localStorage !== 'undefined') {
      const savedVolume = localStorage.getItem('volume')
      return savedVolume !== null ? parseFloat(savedVolume) : 1
    }
    return 1
  })
  const [pause, setPause] = useState<boolean>(true)
  const [repeat, setRepeat] = useState<boolean>(true)
  const [shuffle, setShuffle] = useState<boolean>(false)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const audioElement = audioRef.current

  const handleShuffle = () => {
    setShuffle(!shuffle)
  }

  const handleRepeat = () => {
    setRepeat(!repeat)
  }

  const handleDoubleClick = (index: number) => {
    handlePlaySong(index)
  }

  const handlePlaySong = (index: number) => {
    setActiveIndex(index)
    handleIsPlaying()
  }

  const handleIsPlaying = () => {
    setIsPlaying(!isPlaying)
    handleTogglePlay()
  }

  const handleTogglePlay = useCallback(() => {
    if (pause && audioRef.current?.paused) {
      setPause(false)
      audioRef.current?.play()
    } else {
      setPause(true)
      audioRef.current?.pause()
    }
  }, [pause])

  const handleSkipNext = () => {
    setActiveIndex(prevIndex => {
      const currentIndex = prevIndex ?? 0
      let newIndex = currentIndex + 1
      if (shuffle) {
        newIndex = Math.floor(Math.random() * Songs.length)
      }
      if (newIndex >= Songs.length) {
        newIndex = 0
      }
      return newIndex
    })
  }

  const handleSkipPrev = () => {
    setActiveIndex(prevIndex => {
      const currentIndex = prevIndex ?? 0
      let newIndex = currentIndex - 1
      if (shuffle) {
        newIndex = Math.floor(Math.random() * Songs.length)
      }
      if (newIndex < 0) {
        newIndex = Songs.length - 1
      }
      return newIndex
    })
  }

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
    setTimeout(
      () => localStorage.setItem('volume', volumeLevel.toString()),
      500
    )
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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedIndex = localStorage.getItem('currentSongIndex')
      setActiveIndex(savedIndex ? Number(savedIndex) : 0)
    }
  }, [setActiveIndex])

  useEffect(() => {
    localStorage.setItem('currentSongIndex', String(activeIndex))
  }, [activeIndex])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
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
    handleTogglePlay,
    handleShuffle,
    handleRepeat,
    shuffle,
    repeat,
    isPlaying,
    setIsPlaying,
    handlePlaySong,
    handleDoubleClick,
    activeIndex,
    setActiveIndex,
    handleSkipNext,
    handleSkipPrev,
    handleIsPlaying
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
