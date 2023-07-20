import React, { useEffect, useRef, useState } from 'react'

type ProgressBarProps = {
  audioRef: React.RefObject<HTMLAudioElement | null>
}

const ProgressBar: React.FC<ProgressBarProps> = ({ audioRef }) => {
  const audioBarFillRef = useRef<HTMLDivElement>(null)
  const audioBarRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)

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

    const handleMouseDown = () => {
      setIsDragging(true)
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && audio && audioBar && audioBarFill) {
        const percent = e.offsetX / audioBar.offsetWidth
        audio.currentTime = percent * audio.duration
        audioBarFill.style.width = `${percent * 100}%`
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
      audioBar.addEventListener('mousedown', handleMouseDown)
      audioBar.addEventListener('mouseup', handleMouseUp)
      audioBar.addEventListener('mousemove', handleMouseMove)
      audioBar.addEventListener('click', handleClick)

      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate)
        audioBar.removeEventListener('mousedown', handleMouseDown)
        audioBar.removeEventListener('mouseup', handleMouseUp)
        audioBar.removeEventListener('mousemove', handleMouseMove)
        audioBar.removeEventListener('click', handleClick)
      }
    }
  }, [audioRef, isDragging])

  return (
    <>
      <div
        className="audio-bar group w-24 h-[2px] hover:h-[5px] rounded overflow-hidden transition-all duration-100 bg-black/30 dark:bg-[#4d4d4d]"
        ref={audioBarRef}
      >
        <div
          className="h-[2px] group-hover:h-[5px] w-0 rounded relative bg-black dark:bg-white transition-all duration-100"
          ref={audioBarFillRef}
        ></div>
      </div>
    </>
  )
}

export default ProgressBar
