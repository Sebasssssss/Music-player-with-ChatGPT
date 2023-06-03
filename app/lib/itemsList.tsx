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

interface Playlist {
  href: string
  name: string
  image: string
}

export const playlists: Playlist[] = [
  {
    href: 'relaxingVibes',
    name: 'Relaxing Vibes',
    image:
      'https://images.unsplash.com/photo-1524419986249-348e8fa6ad4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    href: 'upbeatWorkout',
    name: 'Upbeat Workout',
    image:
      'https://images.unsplash.com/photo-1531361171768-37170e369163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
  },
  {
    href: 'throwbackJams',
    name: 'Throwback Jams',
    image:
      'https://images.unsplash.com/photo-1558393385-c2019c6a125c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
  }
]
