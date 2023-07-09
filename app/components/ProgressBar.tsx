import React, { useEffect, useRef } from 'react'

type ProgressBarProps = {
  audioRef: React.RefObject<HTMLAudioElement | null>
}

const ProgressBar: React.FC<ProgressBarProps> = ({ audioRef }) => {
  const audioBarFillRef = useRef<HTMLDivElement>(null)
  const audioBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    const audioBarFill = audioBarFillRef.current
    const audioBar = audioBarRef.current

    const handleTimeUpdate = () => {
      if (audio && audioBarFill) {
        const juicePos = audio.currentTime / audio.duration
        audioBarFill.style.width = `${juicePos * 100}%`
        if (audio.currentTime === audio.duration) {
          audioBarFill.style.width = '0'
        }
      }
    }

    const handleClick = (e: MouseEvent) => {
      if (audio && audioBar && audioBarFill) {
        const percent = e.offsetX / audioBar.offsetWidth
        audio.currentTime = percent * audio.duration
        audioBarFill.style.width = `${percent * 100}%`
      }
    }

    if (audio && audioBarFill && audioBar) {
      audio.addEventListener('timeupdate', handleTimeUpdate)
      audioBar.addEventListener('click', handleClick)

      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate)
        audioBar.removeEventListener('click', handleClick)
      }
    }
  }, [audioRef])

  return (
    <>
      <div className="audio-bar bg-black/30" ref={audioBarRef}>
        <div className="audio-progress bg-black" ref={audioBarFillRef}></div>
      </div>
    </>
  )
}

export default ProgressBar
