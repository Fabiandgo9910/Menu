'use client'
import Image from 'next/image'
import Masonry from 'react-masonry-css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import GalleryImagesSkeleton from '../../Skeleton/GalleryImages'
import { Icon } from '@iconify/react'
import { GalleryImagesType } from '@/app/types/galleryimage'
import { FullMenuType } from '@/app/types/fullmenu'

// Nuevo tipo para categorías
type GalleryCategoryType = {
  title: string
  items: GalleryImagesType[]
}


const Gallery = () => {
  const [galleryCategories, setGalleryCategories] = useState<GalleryCategoryType[]>([])
  const [fullMenu, setFullMenu] = useState<FullMenuType[]>([])
  const [loading, setLoading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = () => setIsMenuOpen(true)
  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()

        // Adaptar a la nueva estructura
        setGalleryCategories(data.GalleryImagesData)
        setFullMenu(data.FullMenuData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='menu' className='scroll-mt-20'>
      <div className='container'>
        {/* Encabezado */}
        <div className='text-center'>
          <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>
            Menú
          </p>
          <h2 className='text-white'>Nuestra Carta</h2>
        </div>

        {/* Secciones del Menú */}
        <div className='my-16 px-6 space-y-20'>
          {loading
            ? (
              <div className='flex flex-wrap gap-8 justify-center'>
                {Array.from({ length: 9 }).map((_, i) => (
                  <GalleryImagesSkeleton key={i} />
                ))}
              </div>
            )
            : galleryCategories.map((category, idx) => (
              <div key={idx}>
                <h3 className='text-3xl font-semibold text-primary mb-8 text-center'>
                  {category.title}
                </h3>

                <Masonry
                  breakpointCols={{ default: 3, 1100: 2, 700: 1 }}
                  className='flex gap-8'
                  columnClassName='masonry-column'>
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className='relative overflow-hidden rounded-3xl mb-8 group shadow-lg'>
                      <div className='relative w-full h-[380px]'>
                        <Image
                          src={item.src}
                          alt={item.name}
                          fill
                          className='object-cover object-center transition-transform duration-700 group-hover:scale-105'
                          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        />
                        {/* Overlay */}
                        <div className='absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out p-6 flex flex-col justify-end text-white'>
                          <div className='space-y-2'>
                            <p className='text-lg md:text-xl font-semibold'>
                              {item.name}
                            </p>

                            {item.ingredients && item.ingredients.length > 0 && (
                              <p className='text-sm text-gray-200 leading-snug'>
                                <span className='font-semibold text-primary'>
                                  Ingredientes:
                                </span>{' '}
                                {item.ingredients.join(', ')}
                              </p>
                            )}

                            {item.contains && item.contains.length > 0 && (
                              <p className='text-sm text-gray-300 leading-snug'>
                                <span className='font-semibold text-red-400'>
                                  Contiene:
                                </span>{' '}
                                {item.contains.join(', ')}
                              </p>
                            )}
                          </div>

                          <div className='flex items-center justify-between mt-4'>
                            <p className='text-xl font-medium'>{item.price} €</p>
                            <Link
                              href='#'
                              className='text-white rounded-full bg-primary border border-primary py-1.5 px-5 hover:bg-primary/40 hover:backdrop-blur-xs transition duration-300 text-sm'>
                              Detalles
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
            ))}
        </div>

        {/* Pop-up del menú completo */}
        {isMenuOpen && (
          <div
            className='fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50 px-4'
            onClick={closeMenu}>
            <div
              className='relative mx-auto w-full max-w-2xl max-h-[80vh] rounded-3xl px-4 pt-14 pb-8 text-center bg-white overflow-hidden'
              onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeMenu}
                className='absolute top-0 right-0 mr-4 mt-8 hover:cursor-pointer'>
                <Icon
                  icon='material-symbols:close-rounded'
                  width={24}
                  height={24}
                  className='text-black hover:text-primary text-24 inline-block me-2'
                />
              </button>
              <p className='text-black text-2xl font-semibold mb-4'>
                Full Menu
              </p>
              <div className='max-h-[350px] overflow-y-auto'>
                <table className='w-full table-auto border-collapse text-left'>
                  <thead className='sticky top-0 bg-neutral-100 z-10'>
                    <tr>
                      <th className='py-3 px-4'>Dish</th>
                      <th className='py-3 px-4'>Description</th>
                      <th className='py-3 px-4'>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fullMenu.map((item, index) => (
                      <tr key={index} className='border-t'>
                        <td className='py-2 px-4'>{item.name}</td>
                        <td className='py-2 px-4'>{item.description}</td>
                        <td className='py-2 px-4'>{item.price} €</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery
