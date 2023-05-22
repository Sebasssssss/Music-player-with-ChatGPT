import { Play } from 'iconoir-react'
export default function Audiobar() {
  return (
    <div className="w-full shados container absolute bottom-6 left-12 right-0 ml-auto mr-auto py-9 bg-white rounded-[10px] z-10">
      <div className="flex items-center gap-2">
        <Play />
        Audio
      </div>
    </div>
  )
}
