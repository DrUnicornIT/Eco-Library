import { BlurImage } from '@tszhong0411/ui'
// import { SiNextdotjs } from '@icons-pack/react-simple-icons'
import { HeartIcon } from 'lucide-react'

const FavoriteFramework = () => {
  return (
    <div className='shadow-feature-card dark:shadow-feature-card-dark flex flex-col gap-6 rounded-xl p-4 lg:p-6'>
      <div className='flex items-center gap-2'>
        <HeartIcon className='size-[18px]' />
        <h2 className='text-sm font-light'>My Love</h2>
      </div>
      <div className='flex items-center justify-center'>
        <BlurImage
                src='/images/avatar.png'
                // className='rounded-full'
                width={400}
                height={400}
                alt='ECO'
              />
      </div>
    </div>
  )
}

export default FavoriteFramework
