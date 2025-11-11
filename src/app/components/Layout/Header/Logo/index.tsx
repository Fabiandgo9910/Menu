import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link href='/' className='flex items-center gap-4'>
      <Image
        src='/images/Logo/jenkins logo.png'
        alt='logo'
        width={250}
        height={50}
        quality={100}
      />
    </Link>
  )
}

export default Logo
