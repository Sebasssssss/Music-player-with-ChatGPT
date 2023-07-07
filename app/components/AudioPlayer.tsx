import React, { useEffect, useRef } from 'react'

type AudioPlayerProps = {
  audioRef: React.RefObject<HTMLAudioElement | null>
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioRef }) => {
  const audioBarFillRef = useRef<HTMLDivElement>(null)
  const audioBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    const audioBarFill = audioBarFillRef.current
    const audioBar = audioBarRef.current

    if (audio && audioBarFill && audioBar) {
      audio.addEventListener('timeupdate', () => {
        const juicePos = audio.currentTime / audio.duration
        audioBarFill.style.width = `${juicePos * 100}%`
      })

      audioBar.addEventListener('click', e => {
        const percent = e.offsetX / audioBar.offsetWidth
        audio.currentTime = percent * audio.duration
        audioBarFill.style.width = `${percent * 100}%`
      })

      return () => {
        audio.removeEventListener('timeupdate', () => {})
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

export default AudioPlayer
