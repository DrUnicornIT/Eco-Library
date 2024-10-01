'use client'

// checkmarx
// osgeo
// meteor
// monero
// chessdotcom
// protocolsdotio
// hoppscotch
// libreofficecalc
// buymeacoffee


import {
  SiDeno,
  SiBitcoin,
  SiFigma,
  SiCheckmarx,
  SiOsgeo,
  SiMeteor,
  SiChessdotcom,
  SiProtocolsdotio,
  SiMarkdown,
  SiHoppscotch,
  SiLibreofficecalc,
  SiBuymeacoffee,
  SiAbbott,
  SiAdidas,
  SiNike,
  SiUniqlo,
  SiUnilever,
  SiGooglegemini,
  SiOpenai,
  SiApple
} from '@icons-pack/react-simple-icons'
import { Marquee } from '@tszhong0411/ui'
import { ZapIcon } from 'lucide-react'

const StacksCard = () => {
  return (
    <div className='shadow-feature-card dark:shadow-feature-card-dark flex h-60 flex-col gap-2 overflow-hidden rounded-xl p-4 lg:p-6'>
      <div className='flex items-center gap-2'>
        <ZapIcon className='size-[18px]' />
        <h2 className='text-sm font-light'>Stacks</h2>
      </div>
      <Marquee gap='20px' className='py-4' fade pauseOnHover>
        <SiDeno className='size-10' />
        <SiBitcoin className='size-10' />
        <SiCheckmarx className='size-10' />
        <SiAbbott className='size-10' />
        <SiFigma className='size-10' />
        <SiAdidas className='size-10' />
        <SiOsgeo className='size-10' />
        <SiNike className='size-10' />
        <SiUniqlo className='size-10' />
        <SiUnilever className='size-10' />
      </Marquee>
      <Marquee gap='20px' className='py-4' reverse fade pauseOnHover>
        <SiGooglegemini className='size-10' />
        <SiMeteor className='size-10' />
        <SiProtocolsdotio className='size-10' />
        <SiChessdotcom className='size-10' />
        <SiOpenai className='size-10' />
        <SiApple className='size-10' />
        <SiHoppscotch className='size-10' />
        <SiMarkdown className='size-10' />
        <SiLibreofficecalc className='size-10' />
        <SiBuymeacoffee className='size-10' />
      </Marquee>
    </div>
  )
}

export default StacksCard
