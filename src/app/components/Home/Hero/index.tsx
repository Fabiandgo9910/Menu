'use client'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section id='home-section' className='bg-black mt-20'>
      <div className='container xl:pt-7 pt-16'>
        <div className='grid grid-cols-1 lg:grid-cols-12 items-center'>
          <div className='lg:col-span-6'>
            <h1 className='font-semibold mb-5 text-white  text-center sm:leading-20 leading-16'>
              Jenkin's
            </h1>
            <p className=' text-white text-5xl font-normal mb-10  text-center'>
              JENKIN’S<br /> GIVES YOU<br /> IRRESISTIBLE<br /> AMERICAN FOOD<br />
            </p>
            <div className='flex flex-col sm:flex-row gap-5 items-center justify-center '>
              <Link href='/#menu'>
                <button className='text-xl font-medium rounded-full text-white py-3 px-8 bg-primary hover:text-primary border border-primary hover:bg-transparent hover:cursor-pointer transition ease-in-out duration-300'>
                  Menu
                </button>
              </Link>
              <Link href='https://eatjenkins.com/reservas-orense/ ' target='_blank'>
                <button className='text-xl border border-primary rounded-full font-medium py-3 px-8 text-primary hover:text-white hover:bg-primary hover:cursor-pointer transition ease-in-out duration-300'>
                  Reservar
                </button>
              </Link>
            </div>
          </div>
          <div className='lg:col-span-6 flex justify-center relative'>
            <div className='flex bg-white p-2 gap-5 items-center bottom-10 left-10 rounded-xl absolute'>
              {/* <Image
                src={'/images/hero/pizza.webp'}
                alt='pizza-image'
                width={68}
                height={68}
              />
              <p className='text-lg font-normal'>
                Over 50+ <br /> signature dishes
              </p> */}
            </div>
            <Image
              className=' rounded-4xl'
              src='/images/logo/unnamed.webp'
              alt='nothing'
              width={1000}
              height={805}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
