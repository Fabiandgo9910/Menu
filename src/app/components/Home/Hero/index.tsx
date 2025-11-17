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
                  Carta
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
            <div className='flex p-2 gap-5 items-center bottom-10 left-10 rounded-xl absolute'>
              <div className="relative flex items-center gap-4 bg-gradient-to-r from-primary/80 via-primary to-primary/90 text-white rounded-2xl shadow-lg px-5 py-3 hover:scale-105 transition-transform duration-300 ease-out backdrop-blur-md">
                <div className="relative w-16 h-16 flex-shrink-0 rounded-full overflow-hidden border-2 border-white/80 shadow-md">
                  <Image
                    src='https://images.unsplash.com/photo-1550547660-d9450f859349'
                    alt="pizza-image"
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>

                <div className="flex flex-col leading-tight">
                  <p className="text-xs uppercase tracking-widest text-yellow-300 font-semibold animate-pulse">
                    Alerta
                  </p>
                  <p className="text-lg md:text-xl font-bold text-white drop-shadow-md">
                    ¡ Burger del Mes !
                  </p>
                </div>

                {/* 🔥 Glow decorativo animado */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
              </div>
            </div>
            <Image
              className=' rounded-4xl mt-10'
              src='/images/Promo/promo.webp'
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
