import { type IconType, SiFacebook, SiGmail, SiGooglehome } from '@icons-pack/react-simple-icons'
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
    text: 'Chuyên Đề'
  },
  {
    icon: <PencilIcon className='size-3.5' />,
    href: '/project',
    text: 'Dự Án'
  },
  {
    icon: <PencilIcon className='size-3.5' />,
    href: '/report',
    text: 'Báo cáo Kinh tế'
  },
  {
    icon: <MessageCircleIcon className='size-3.5' />,
    href: '/new',
    text: 'Tin Tức'
  },

  {
    icon: <UserCircleIcon className='size-3.5' />,
    href: '/about',
    text: 'Về Chúng Mình'
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
        text: 'Trang Chủ'
      },
      {
        href: '/research',
        text: 'Chuyên Đề'
      },
      {
        href: '/project',
        text: 'Dự Án'
      },
      {
        href: '/report',
        text: 'Báo cáo Kinh tế'
      }
    ]
  },
  {
    id: 2,
    links: [
      {
        href: '/new',
        text: 'Tin Tức'
      },
      {
        href: '/about',
        text: 'Về Chúng Mình'
      },
      {
        href: '/album',
        text: 'Album'
      }
    ]
  },
  {
    id: 3,
    links: [
      {
        href: 'https://www.facebook.com/economiadav',
        text: 'Facebook'
      },
      {
        href: 'mailto:economia.dav@gmail.com',
        text: 'Gmail'
      },
      {
        href: '0988358369',
        text: 'Phone'
      }
    ]
  }
]

export const SOCIAL_LINKS: SocialLinks = [
  {
    href: 'https://www.facebook.com/economiadav',
    title: 'Facebook',
    icon: SiFacebook
  },
  {
    href: 'mailto:economia.dav@gmail.com',
    title: 'Gmail',
    icon: SiGmail
  },
  {
    href: 'tel:0988358369',
    title: 'Phone - Chủ Nhiệm Thùy Dương',
    icon: SiGooglehome
  },
  {
    href: 'tel:0964060215',
    title: 'Phone - Cố Vấn Ngọc Thơ',
    icon: SiGooglehome
  },
  {
    href: 'tel:0829520797',
    title: 'Phone - Cố Vấn Xuân Nhung',
    icon: SiGooglehome
  }
]
