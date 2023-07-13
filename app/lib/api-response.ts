export interface Song {
  id: number
  name: string
  duration: string
}
export interface Playlist {
  id: string
  name: string
  description: string
  tracks: {
    total: number
  }
  followers: {
    total: number
  }
  images: {
    url: string
    width: number
    height: number
  }[]
}

export const playlists: Playlist[] = [
  {
    id: '1',
    name: 'Chill Vibes',
    description: 'Relax and unwind with these soothing tracks.',
    tracks: {
      total: 52
    },
    followers: {
      total: 1432
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1524419986249-348e8fa6ad4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        width: 640,
        height: 640
      }
    ]
  },
  {
    id: '2',
    name: 'Summer Hits',
    description: 'The hottest tracks of the summer!',
    tracks: {
      total: 76
    },
    followers: {
      total: 5421
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1531361171768-37170e369163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
        width: 640,
        height: 640
      }
    ]
  },
  {
    id: '3',
    name: 'Throwback Jams',
    description: 'Rediscover classic hits from the past.',
    tracks: {
      total: 98
    },
    followers: {
      total: 2789
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1686007576593-e246e858a383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        width: 640,
        height: 640
      }
    ]
  },
  {
    id: '4',
    name: 'Road Trip Mix',
    description: 'Hit the road with these energetic tunes.',
    tracks: {
      total: 64
    },
    followers: {
      total: 1987
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1685857011630-cef679285c9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        width: 640,
        height: 640
      }
    ]
  },
  {
    id: '5',
    name: 'Morning Motivation',
    description: 'Start your day right with these uplifting tracks.',
    tracks: {
      total: 32
    },
    followers: {
      total: 972
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1686003571789-d60e9d0de1ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        width: 640,
        height: 640
      }
    ]
  },
  {
    id: '6',
    name: 'Party Mix',
    description: 'Get the party started with these upbeat bangers.',
    tracks: {
      total: 57
    },
    followers: {
      total: 3045
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1685648042030-01dc295c1530?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
        width: 640,
        height: 640
      }
    ]
  },
  {
    id: '7',
    name: 'Workout Mix',
    description:
      'Stay motivated during your workout with these high-energy tracks.',
    tracks: {
      total: 42
    },
    followers: {
      total: 1823
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1685945719932-7c173611d4e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        width: 640,
        height: 640
      }
    ]
  },
  {
    id: '8',
    name: 'Relaxation Zone',
    description:
      'Unwind and find your inner peace with these calming melodies.',
    tracks: {
      total: 26
    },
    followers: {
      total: 645
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1686002359940-6a51b0d64f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        width: 640,
        height: 640
      }
    ]
  },
  {
    id: '9',
    name: 'Romantic Evening',
    description: 'Set the mood with these romantic ballads.',
    tracks: {
      total: 37
    },
    followers: {
      total: 1245
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1685959329143-0b2c9d27c167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        width: 640,
        height: 640
      }
    ]
  },
  {
    id: '10',
    name: 'Indie Favorites',
    description: 'Discover the best indie tracks from emerging artists.',
    tracks: {
      total: 63
    },
    followers: {
      total: 2038
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1685980384063-70eac56be70c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        width: 640,
        height: 640
      }
    ]
  }
]

export const Songs = [
  {
    id: 1,
    name: 'Midnight Magic',
    duration: '3:45',
    isCurrentlyPlaying: true
  },
  {
    id: 2,
    name: 'Dancing in the Moonlight',
    duration: '3:15',
    isCurrentlyPlaying: false
  },
  {
    id: 3,
    name: 'Nighttime Serenade',
    duration: '4:30',
    isCurrentlyPlaying: false
  },
  {
    id: 4,
    name: 'Nocturnal Groove',
    duration: '4:10',
    isCurrentlyPlaying: false
  },
  {
    id: 5,
    name: 'Moonlit Melody',
    duration: '3:50',
    isCurrentlyPlaying: false
  },
  {
    id: 6,
    name: 'Silent Nightfall',
    duration: '4:20',
    isCurrentlyPlaying: false
  },
  {
    id: 7,
    name: 'Nighttime Reverie',
    duration: '4:05',
    isCurrentlyPlaying: false
  },
  {
    id: 8,
    name: 'Starry Night Jam',
    duration: '3:55',
    isCurrentlyPlaying: false
  },
  {
    id: 9,
    name: 'Moonbeam Sonata',
    duration: '4:25',
    isCurrentlyPlaying: false
  },
  {
    id: 10,
    name: 'Dreamy Nocturne',
    duration: '4:00',
    isCurrentlyPlaying: false
  },
  {
    id: 11,
    name: 'Nightfall Rendezvous',
    duration: '4:15',
    isCurrentlyPlaying: false
  }
]
