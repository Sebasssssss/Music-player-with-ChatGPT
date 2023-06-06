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
        url: 'https://images.unsplash.com/photo-1686007576593-e246e858a383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        width: 640,
        height: 640
      }
    ]
  },
  {
    id: '4',
    name: 'Workout Motivation',
    description: 'Energize your workouts with these high-energy tracks.',
    tracks: {
      total: 64
    },
    followers: {
      total: 3897
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
    name: 'Indie Discoveries',
    description: 'Explore the best independent music of the moment.',
    tracks: {
      total: 120
    },
    followers: {
      total: 2156
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
    name: 'Late Night Drive',
    description: 'The perfect soundtrack for a midnight road trip.',
    tracks: {
      total: 42
    },
    followers: {
      total: 1073
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
    name: 'Acoustic Relaxation',
    description: 'Unplugged and soothing tunes for ultimate relaxation.',
    tracks: {
      total: 68
    },
    followers: {
      total: 3145
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
    name: 'Party Mix',
    description: 'Get the party started with these upbeat tracks.',
    tracks: {
      total: 84
    },
    followers: {
      total: 4762
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
    name: 'Focus and Study',
    description: 'Boost your concentration with these instrumental tracks.',
    tracks: {
      total: 105
    },
    followers: {
      total: 1984
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
    name: 'R&B Grooves',
    description: 'Smooth and soulful rhythm and blues tracks.',
    tracks: {
      total: 93
    },
    followers: {
      total: 3412
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
