import {
  type IconType,
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiX,
  SiYoutube
} from '@icons-pack/react-simple-icons'
import { MessageCircleIcon, MonitorIcon, PencilIcon, UserCircleIcon } from 'lucide-react'

type HeaderLinks = Array<{
  icon: React.ReactNode
  href: string
  text: string
}>

type FooterLinks = Array<{
  id: number
  links: Array<{
    href: string
    text: string
  }>
}>

type SocialLinks = Array<{
  href: string
  title: string
  icon: IconType
}>

export const HEADER_LINKS: HeaderLinks = [
  {
    icon: <PencilIcon className='size-3.5' />,
    href: '/research',
    text: 'Research'
  },
  {
    icon: <PencilIcon className='size-3.5' />,
    href: '/project',
    text: 'Project'
  },
  {
    icon: <PencilIcon className='size-3.5' />,
    href: '/report',
    text: 'Economic Report'
  },
  {
    icon: <MessageCircleIcon className='size-3.5' />,
    href: '/new',
    text: 'New'
  },

  {
    icon: <UserCircleIcon className='size-3.5' />,
    href: '/about',
    text: 'About'
  },
  {
    icon: <MonitorIcon className='size-3.5' />,
    href: '/album',
    text: 'Album'
  }
]

export const FOOTER_LINKS: FooterLinks = [
  {
    id: 1,
    links: [
      {
        href: '/',
        text: 'Home'
      },
      {
        href: '/topic',
        text: 'topic'
      },
      {
        href: '/about',
        text: 'About'
      },
      {
        href: '/dashboard',
        text: 'Dashboard'
      }
    ]
  },
  {
    id: 2,
    links: [
      {
        href: '/guestbook',
        text: 'Guestbook'
      },
      {
        href: '/uses',
        text: 'Uses'
      },
      {
        href: '/projects',
        text: 'Projects'
      },
      {
        href: 'https://links.honghong.me',
        text: 'Links'
      }
    ]
  },
  {
    id: 3,
    links: [
      {
        href: 'https://www.facebook.com/tszhong0411/',
        text: 'Facebook'
      },
      {
        href: 'https://www.instagram.com/tszhong0411/',
        text: 'Instagram'
      },
      {
        href: 'https://github.com/tszhong0411',
        text: 'GitHub'
      },
      {
        href: 'https://www.youtube.com/@tszhong0411',
        text: 'YouTube'
      }
    ]
  }
]

export const SOCIAL_LINKS: SocialLinks = [
  {
    href: 'https://github.com/tszhong0411',
    title: 'GitHub',
    icon: SiGithub
  },
  {
    href: 'https://www.facebook.com/tszhong0411/',
    title: 'Facebook',
    icon: SiFacebook
  },
  {
    href: 'https://www.instagram.com/tszhong0411/',
    title: 'Instagram',
    icon: SiInstagram
  },
  {
    href: 'https://x.com/tszhong0411',
    title: 'X',
    icon: SiX
  },
  {
    href: 'https://www.youtube.com/@tszhong0411',
    title: 'YouTube',
    icon: SiYoutube
  }
]
