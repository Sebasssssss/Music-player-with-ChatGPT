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
        url: 'https://m3.paperblog.com/i/106/1067705/happy-releaseday-omi-me-4-u-L-QCAlDO.jpeg',
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
        url: 'https://images.unsplash.com/photo-1531361171768-37170e369163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
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
        url: 'https://hiphop-n-more.com/wp-content/uploads/2016/11/post-malone-stoney.jpg',
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
        url: 'https://th.bing.com/th/id/OIP.TCJ_HtIyRf6hqWrHrkqyxgHaHa?pid=ImgDet&rs=1',
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
        url: 'https://images.unsplash.com/photo-1686003571789-d60e9d0de1ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
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
        url: 'https://images.unsplash.com/photo-1685648042030-01dc295c1530?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
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
        url: 'https://images.unsplash.com/photo-1685945719932-7c173611d4e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
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
        url: 'https://images.unsplash.com/photo-1686002359940-6a51b0d64f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
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
        url: 'https://images.unsplash.com/photo-1685959329143-0b2c9d27c167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
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
    name: 'Sunflower - Spider-Man: Into the Spider-Verse',
    artists: 'Post Malone',
    duration: '3:45',
    image:
      'https://i.pinimg.com/736x/1d/aa/7c/1daa7c3e64211cdde091c4f882ad4309.jpg'
  },
  {
    id: 2,
    name: 'No Lie',
    artists: 'Sean Paul, Dual Lipa',
    duration: '3:15',
    image:
      'https://t2.genius.com/unsafe/252x252/https%3A%2F%2Fimages.genius.com%2Fe26e8a411e1477de88fd1b2011556839.1000x1000x1.jpg'
  },
  {
    id: 3,
    name: 'Bohemian Rhapsody',
    artists: 'Queen',
    duration: '4:30',
    image:
      'https://www.udiscovermusic.com/wp-content/uploads/2018/09/Queen-Bohemian-Rhapsody-The-Original-Soundtrack-Cover-Art.jpeg.jpg'
  },
  {
    id: 4,
    name: 'Hotel California',
    artists: 'Eagles',
    duration: '6:30',
    image:
      'https://th.bing.com/th/id/R.4143ea7be494564e7dfd4e8f042d2fa3?rik=emCTRMrdP8J2Ww&pid=ImgRaw&r=0'
  },
  {
    id: 5,
    name: 'Thriller',
    artists: 'Michael Jackson',
    duration: '5:57',
    image:
      'https://th.bing.com/th/id/OIP.1ZlrWgVh4RUr_hX3mvq-egHaHa?pid=ImgDet&rs=1'
  },
  {
    id: 6,
    name: 'Imagine',
    artists: 'John Lennon',
    duration: '3:03',
    image:
      'https://th.bing.com/th/id/R.d97abbf6ca4ab4e0c9f4da48b900d99a?rik=AEzDTuKidZZYUw&riu=http%3a%2f%2fimg.wennermedia.com%2f920-width%2frs-136868-0b79ac312d1402b86d803ab464e58c456277e9fc.jpg&ehk=5S1B6Pr3bjcHntJFAOKE86nWBVKQpDD8PfU8d66NUKg%3d&risl=&pid=ImgRaw&r=0'
  },
  {
    id: 7,
    name: 'Hey Jude',
    artists: 'The Beatles',
    duration: '7:11',
    image:
      'https://th.bing.com/th/id/R.81c8c0acb1b3603da3eff94c74011067?rik=dMv20s0xd65kqg&pid=ImgRaw&r=0'
  },
  {
    id: 8,
    name: 'Like a Rolling Stone',
    artists: 'Bob Dylan',
    duration: '6:13',
    image:
      'https://th.bing.com/th/id/R.6308be7d91435a77af94ff989cc6d963?rik=PceX9wmYc5Tteg&pid=ImgRaw&r=0'
  },
  {
    id: 9,
    name: 'Stairway to Heaven',
    artists: 'Led Zeppelin',
    duration: '8:02',
    image:
      'https://th.bing.com/th/id/R.dd914647eb361097d77f3070d1a26f59?rik=tUYTbtXwylXXXg&pid=ImgRaw&r=0'
  },
  {
    id: 10,
    name: 'Smells Like Teen Spirit',
    artists: 'Nirvana',
    duration: '5:01',
    image:
      'https://th.bing.com/th/id/R.02685d922f28673c62f9fa5b5a8aaf42?rik=ofl9iZ8lv2hRIw&riu=http%3a%2f%2fcuteculturechick.com%2fwp-content%2fuploads%2f2012%2f12%2fNirvana-Smells-Like-Teen-Spirit.jpg&ehk=7e2SfG4OQrDnYbkwUvqPWWjMos%2fQxGvzCtMnRKA8rFc%3d&risl=&pid=ImgRaw&r=0'
  },
  {
    id: 11,
    name: "Sweet Child o' Mine",
    artists: "Guns N' Roses",
    duration: '5:55',
    image:
      'https://th.bing.com/th/id/R.4b3629528430b69aea9c8d2e5005d74d?rik=kbP0wV8J%2bS6w6Q&pid=ImgRaw&r=0'
  }
]
