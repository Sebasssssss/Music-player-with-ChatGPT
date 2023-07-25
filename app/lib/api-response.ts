export interface Playlist {
  id: string
  name: string
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
    name: 'Me 4 U',
    tracks: {
      total: 52
    },
    followers: {
      total: 1432
    },
    images: [
      {
        url: '/omi.webp',
        width: 640,
        height: 640
      }
    ]
  },
  {
    id: '2',
    name: 'Battleground',
    tracks: {
      total: 76
    },
    followers: {
      total: 5421
    },
    images: [
      {
        url: '/4u.webp',
        width: 640,
        height: 640
      }
    ]
  },
  {
    id: '3',
    name: 'Stoney (Deluxe)',
    tracks: {
      total: 16
    },
    followers: {
      total: 2789
    },
    images: [
      {
        url: '/eminem.webp',
        width: 640,
        height: 640
      }
    ]
  },
  {
    id: '4',
    name: 'TESTING',
    tracks: {
      total: 64
    },
    followers: {
      total: 1987
    },
    images: [
      {
        url: '/disco.webp',
        width: 640,
        height: 640
      }
    ]
  },
  {
    id: '5',
    name: 'Morning Motivation',
    tracks: {
      total: 32
    },
    followers: {
      total: 972
    },
    images: [
      {
        url: '/flower.webp',
        width: 640,
        height: 640
      }
    ]
  },
  {
    id: '6',
    name: 'Party Mix',
    tracks: {
      total: 57
    },
    followers: {
      total: 3045
    },
    images: [
      {
        url: '/hand.webp',
        width: 640,
        height: 640
      }
    ]
  },
  {
    id: '7',
    name: 'Workout Mix',
    tracks: {
      total: 42
    },
    followers: {
      total: 1823
    },
    images: [
      {
        url: '/house.webp',
        width: 640,
        height: 640
      }
    ]
  },
  {
    id: '8',
    name: 'Relaxation Zone',
    tracks: {
      total: 26
    },
    followers: {
      total: 645
    },
    images: [
      {
        url: '/party.webp',
        width: 640,
        height: 640
      }
    ]
  },
  {
    id: '9',
    name: 'Romantic Evening',
    tracks: {
      total: 37
    },
    followers: {
      total: 1245
    },
    images: [
      {
        url: '/OIP.webp',
        width: 640,
        height: 640
      }
    ]
  },
  {
    id: '10',
    name: 'Indie Favorites',
    tracks: {
      total: 63
    },
    followers: {
      total: 2038
    },
    images: [
      {
        url: '/sun.webp',
        width: 640,
        height: 640
      }
    ]
  }
]

export const Songs = [
  {
    id: 1,
    name: 'Sunflower - Spider-Man: Into the Spider-Verse',
    artists: 'Post Malone',
    duration: '3:45',
    image: '/spiderman.webp'
  },
  {
    id: 2,
    name: 'No Lie',
    artists: 'Sean Paul, Dual Lipa',
    duration: '3:15',
    image: '/no-lie.webp'
  },
  {
    id: 3,
    name: 'Bohemian Rhapsody',
    artists: 'Queen',
    duration: '4:30',
    image: '/bohemian-rhapsody.webp'
  },
  {
    id: 4,
    name: 'Hotel California',
    artists: 'Eagles',
    duration: '6:30',
    image: '/hotel-california.webp'
  },
  {
    id: 5,
    name: 'Thriller',
    artists: 'Michael Jackson',
    duration: '5:57',
    image: '/thriller.webp'
  },
  {
    id: 6,
    name: 'Imagine',
    artists: 'John Lennon',
    duration: '3:03',
    image: '/Imagine.webp'
  },
  {
    id: 7,
    name: 'Hey Jude',
    artists: 'The Beatles',
    duration: '7:11',
    image: '/hey-jude.webp'
  },
  {
    id: 8,
    name: 'Like a Rolling Stone',
    artists: 'Bob Dylan',
    duration: '6:13',
    image: '/Like-a-Rolling-Stone.webp'
  },
  {
    id: 9,
    name: 'Stairway to Heaven',
    artists: 'Led Zeppelin',
    duration: '8:02',
    image: '/Stairway-to-Heaven.webp'
  },
  {
    id: 10,
    name: 'Smells Like Teen Spirit',
    artists: 'Nirvana',
    duration: '5:01',
    image: '/Smells-Like-Teen-Spirit.webp'
  },
  {
    id: 11,
    name: "Sweet Child o' Mine",
    artists: "Guns N' Roses",
    duration: '5:55',
    image: '/Sweet-Child-o_-Mine.webp'
  }
]
