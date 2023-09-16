import { IconDescriptor } from 'next/dist/lib/metadata/types/metadata-types'

type Site = {
  url: string
  title: string
  name: string
  keywords: string[]
  titleTemplate: string
  description: string
  githubUsername: string
  favicons: IconDescriptor[]
}

const site: Site = {
  url:
    process.env.NODE_ENV === 'production'
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` ?? 'https://honghong.me'
      : 'http://localhost:3000',
  title: 'Hong',
  name: 'Hong',
  keywords: ['tszhong0411', 'Next.js', 'React', 'TypeScript', 'Node.js'],
  titleTemplate: '- Hong',
  description: 'Hong • 17 y/o • Student • Full-stack Developer',
  githubUsername: 'tszhong0411',
  favicons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png'
    }
  ]
}

export default site
