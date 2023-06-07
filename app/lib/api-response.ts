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
