import { IcoHome, IcoSearch } from '../components/Icons'

export const Songs = [
  {
    id: 1,
    name: "Let's See What The Night Can Do",
    duration: '4:05',
    isCurrentlyPlaying: true
  },
  {
    id: 2,
    name: "Let's See What The Night Can Do",
    duration: '4:05',
    isCurrentlyPlaying: false
  },
  {
    id: 3,
    name: "Let's See What The Night Can Do",
    duration: '4:05',
    isCurrentlyPlaying: false
  },
  {
    id: 4,
    name: "Let's See What The Night Can Do",
    duration: '4:05',
    isCurrentlyPlaying: false
  },
  {
    id: 5,
    name: "Let's See What The Night Can Do",
    duration: '4:05',
    isCurrentlyPlaying: false
  },
  {
    id: 6,
    name: "Let's See What The Night Can Do",
    duration: '4:05',
    isCurrentlyPlaying: false
  },
  {
    id: 7,
    name: "Let's See What The Night Can Do",
    duration: '4:05',
    isCurrentlyPlaying: false
  }
]

interface ListItem {
  element: React.ReactElement
  icon: React.ReactElement
}

export const listData: ListItem[] = [
  {
    element: (
      <span className="sidebar-listItemText whitespace-nowrap overflow-hidden text-ellipsis leading-[20px]">
        Home
      </span>
    ),
    icon: <IcoHome className="w-5 h-5 inline-block mr-2 flex-shrink-0" />
  },
  {
    element: (
      <span className="sidebar-listItemText">
        <input
          className="outline-none bg-transparent placeholder:text-[#00071d]"
          placeholder="Search"
        />
      </span>
    ),

    icon: (
      <IcoSearch className="w-5 h-5 inline-block mr-2 flex-shrink-0 sidebar-listIcon" />
    )
  }
]
