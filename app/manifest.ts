import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Indiana iLearn 4th Grade Practice Exams',
    short_name: 'iLearn Practice',
    description: 'Free Indiana iLearn 4th grade practice exams for Mathematics and English Language Arts',
    start_url: '/',
    display: 'standalone',
    background_color: '#0ea5e9',
    theme_color: '#0ea5e9',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['education', 'learning'],
    lang: 'en-US',
    orientation: 'portrait',
  }
}

