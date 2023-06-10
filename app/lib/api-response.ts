export interface Song {
  id: number
  name: string
  duration: string
  isCurrentlyPlaying: boolean
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
  songs: Song[]
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
    ],
    songs: [
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
    ],
    songs: [
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
    ],
    songs: [
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
    ],
    songs: [
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
      },
      {
        id: 12,
        name: 'Midnight Magic',
        duration: '3:45',
        isCurrentlyPlaying: true
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
    ],
    songs: [
      {
        id: 13,
        name: 'Moonlit Dance',
        duration: '3:25',
        isCurrentlyPlaying: false
      },
      {
        id: 13,
        name: 'Moonlit Dance',
        duration: '3:25',
        isCurrentlyPlaying: false
      },
      {
        id: 14,
        name: 'Nighttime Whispers',
        duration: '4:12',
        isCurrentlyPlaying: false
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
    ],
    songs: [
      {
        id: 15,
        name: 'Celestial Harmony',
        duration: '4:18',
        isCurrentlyPlaying: false
      },
      {
        id: 16,
        name: 'Midnight Serenade',
        duration: '3:48',
        isCurrentlyPlaying: false
      },
      {
        id: 17,
        name: 'Starlit Symphony',
        duration: '4:02',
        isCurrentlyPlaying: false
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
    ],
    songs: [
      {
        id: 18,
        name: 'Nocturne of Dreams',
        duration: '4:35',
        isCurrentlyPlaying: false
      },
      {
        id: 19,
        name: 'Moonshine Melodies',
        duration: '3:55',
        isCurrentlyPlaying: false
      },
      {
        id: 20,
        name: 'Nighttime Reflections',
        duration: '4:22',
        isCurrentlyPlaying: false
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
    ],
    songs: [
      {
        id: 21,
        name: 'Midnight Magic II',
        duration: '3:45',
        isCurrentlyPlaying: false
      },
      {
        id: 22,
        name: 'Dancing in the Moonlight II',
        duration: '3:15',
        isCurrentlyPlaying: false
      },
      {
        id: 23,
        name: 'Nighttime Serenade II',
        duration: '4:30',
        isCurrentlyPlaying: false
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
    ],
    songs: [
      {
        id: 24,
        name: 'Nocturnal Groove II',
        duration: '4:10',
        isCurrentlyPlaying: false
      },
      {
        id: 25,
        name: 'Moonlit Melody II',
        duration: '3:50',
        isCurrentlyPlaying: false
      },
      {
        id: 26,
        name: 'Silent Nightfall II',
        duration: '4:20',
        isCurrentlyPlaying: false
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
    ],
    songs: [
      {
        id: 27,
        name: 'Nighttime Reverie II',
        duration: '4:05',
        isCurrentlyPlaying: false
      },
      {
        id: 28,
        name: 'Starry Night Jam II',
        duration: '3:55',
        isCurrentlyPlaying: false
      },
      {
        id: 29,
        name: 'Moonbeam Sonata II',
        duration: '4:25',
        isCurrentlyPlaying: false
      },
      {
        id: 30,
        name: 'Dreamy Nocturne II',
        duration: '4:00',
        isCurrentlyPlaying: false
      },
      {
        id: 31,
        name: 'Nightfall Rendezvous II',
        duration: '4:15',
        isCurrentlyPlaying: false
      }
    ]
  }
]

interface Artist {
  id: string
  name: string
  genres: string[]
  followers: {
    total: number
  }
  images: {
    url: string
    width: number
    height: number
  }[]
}

interface SpotifyApiResponse {
  items: Artist[]
}

export const spotifyTopArtists: SpotifyApiResponse = {
  items: [
    {
      id: '1',
      name: 'Billie Eilish',
      genres: ['pop', 'alternative'],
      followers: {
        total: 23874562
      },
      images: [
        {
          url: 'https://images.unsplash.com/photo-1565227748061-b5935bb64665?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmlsbGllJTIwZWxpc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          width: 640,
          height: 640
        }
      ]
    },
    {
      id: '2',
      name: 'Ed Sheeran',
      genres: ['pop', 'folk'],
      followers: {
        total: 38215349
      },
      images: [
        {
          url: 'https://images.unsplash.com/photo-1606158816714-95c4404e8c52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
          width: 640,
          height: 640
        }
      ]
    },
    {
      id: '3',
      name: 'Taylor Swift',
      genres: ['pop', 'country'],
      followers: {
        total: 43982357
      },
      images: [
        {
          url: 'https://images.unsplash.com/photo-1548778052-311f4bc2b502?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGF5bG9yJTIwU3dpZnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          width: 640,
          height: 640
        }
      ]
    },
    {
      id: '4',
      name: 'Post Malone',
      genres: ['hip hop', 'pop'],
      followers: {
        total: 29836457
      },
      images: [
        {
          url: 'https://images.unsplash.com/photo-1614892135411-53c6ac8ce882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UG9zdCUyME1hbG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
          width: 640,
          height: 640
        }
      ]
    },
    {
      id: '5',
      name: 'Ariana Grande',
      genres: ['pop', 'R&B'],
      followers: {
        total: 51482763
      },
      images: [
        {
          url: 'https://images.unsplash.com/photo-1636616908191-d6b5cf8bd73c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXJpYW5hJTIwR3JhbmRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
          width: 640,
          height: 640
        }
      ]
    },
    {
      id: '6',
      name: 'Drake',
      genres: ['hip hop', 'R&B'],
      followers: {
        total: 40321873
      },
      images: [
        {
          url: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RHJha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          width: 640,
          height: 640
        }
      ]
    },
    {
      id: '7',
      name: 'Beyoncé',
      genres: ['R&B', 'pop'],
      followers: {
        total: 28349531
      },
      images: [
        {
          url: 'https://images.unsplash.com/photo-1529976961-17e52d247c69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmV5b25jJUMzJUE5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
          width: 640,
          height: 640
        }
      ]
    },
    {
      id: '8',
      name: 'Kendrick Lamar',
      genres: ['hip hop'],
      followers: {
        total: 13254973
      },
      images: [
        {
          url: 'https://images.unsplash.com/photo-1585794034386-a80c6ec1f4de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S2VuZHJpY2slMjBMYW1hcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
          width: 640,
          height: 640
        }
      ]
    },
    {
      id: '9',
      name: 'Rihanna',
      genres: ['R&B', 'pop'],
      followers: {
        total: 28734692
      },
      images: [
        {
          url: 'https://images.unsplash.com/photo-1621608559536-0846fd224dc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmloYW5uYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
          width: 640,
          height: 640
        }
      ]
    },
    {
      id: '10',
      name: 'The Weeknd',
      genres: ['R&B', 'pop'],
      followers: {
        total: 31240986
      },
      images: [
        {
          url: 'https://images.unsplash.com/photo-1585700071807-1570bf0a9aab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VGhlJTIwV2Vla25kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
          width: 640,
          height: 640
        }
      ]
    }
  ]
}
