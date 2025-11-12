'use client'
import Image from 'next/image'
import Masonry from 'react-masonry-css'
import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'
import GalleryImagesSkeleton from '../../Skeleton/GalleryImages'
import { Icon } from '@iconify/react'
import { GalleryImagesType } from '@/app/types/galleryimage'
import { FullMenuType } from '@/app/types/fullmenu'

type GalleryCategoryType = {
  title: string
  items: GalleryImagesType[]
}

const Gallery = () => {
  const [galleryCategories, setGalleryCategories] = useState<GalleryCategoryType[]>([])
  const [fullMenu, setFullMenu] = useState<FullMenuType[]>([])
  const [loading, setLoading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const openMenu = () => setIsMenuOpen(true)
  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
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

  // 🧠 Calcular distancia de similitud (permite errores ortográficos)
  const levenshteinDistance = (a: string, b: string): number => {
    const matrix = Array.from({ length: b.length + 1 }, (_, i) => [i])
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b[i - 1] === a[j - 1]) {
          matrix[i][j] = matrix[i - 1][j - 1]
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1, // sustitución
            matrix[i][j - 1] + 1,     // inserción
            matrix[i - 1][j] + 1      // eliminación
          )
        }
      }
    }
    return matrix[b.length][a.length]
  }

  const similar = (str: string, query: string) => {
    const distance = levenshteinDistance(str, query)
    return distance <= Math.ceil(query.length / 3)
  }

  // 🔍 Filtro combinado (categorías + búsqueda flexible)
  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    let categories =
      selectedCategories.length > 0
        ? galleryCategories.filter(cat => selectedCategories.includes(cat.title))
        : galleryCategories

    if (!query) return categories

    return categories
      .map(cat => ({
        ...cat,
        items: cat.items.filter(item => {
          const name = item.name.toLowerCase()
          const ingredients = item.ingredients?.join(' ').toLowerCase() || ''
          const contains = item.contains?.join(' ').toLowerCase() || ''
          return (
            name.includes(query) ||
            ingredients.includes(query) ||
            contains.includes(query) ||
            similar(name, query)
          )
        }),
      }))
      .filter(cat => cat.items.length > 0)
  }, [galleryCategories, selectedCategories, searchQuery])

  const toggleCategory = (title: string) => {
    setSelectedCategories(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    )
    const element = categoryRefs.current[title]
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id='menu' className='scroll-mt-20'>
      <div className='container'>
        {/* Encabezado */}
        <div className='text-center mb-10'>
          <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>
            Menú
          </p>
          <h2 className='text-white'>Nuestra Carta</h2>
        </div>

        {/* 🔍 Barra de búsqueda */}
        <div className='flex justify-center mb-8'>
          <input
            type='text'
            placeholder='Buscar plato, ingrediente o similar...'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className='w-full max-w-md px-4 py-2 rounded-full bg-neutral-800 text-white border border-gray-600 focus:outline-none focus:border-primary placeholder-gray-400'
          />
        </div>

        {/* 🧩 Filtros de categorías */}
        {!loading && (
          <div className='flex flex-wrap justify-center gap-3 mb-10'>
            {galleryCategories.map(cat => (
              <button
                key={cat.title}
                onClick={() => toggleCategory(cat.title)}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors duration-300 ${selectedCategories.includes(cat.title)
                    ? 'bg-primary text-white border-primary'
                    : 'border-gray-500 text-gray-300 hover:bg-primary/20'
                  }`}>
                {cat.title}
              </button>
            ))}
            {selectedCategories.length > 0 && (
              <button
                onClick={() => setSelectedCategories([])}
                className='px-4 py-2 rounded-full border border-red-400 text-red-400 text-sm hover:bg-red-400 hover:text-white transition'>
                Limpiar filtros
              </button>
            )}
          </div>
        )}

        {/* 📦 Secciones del Menú */}
        <div className='my-16 px-6 space-y-20'>
          {loading ? (
            <div className='flex flex-wrap gap-8 justify-center'>
              {Array.from({ length: 9 }).map((_, i) => (
                <GalleryImagesSkeleton key={i} />
              ))}
            </div>
          ) : (
            filteredCategories.map((category, idx) => (
              <div
                key={idx}
                ref={el => { categoryRefs.current[category.title] = el; }}
              >
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
                        <div className='absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out p-6 flex flex-col justify-end text-white'>
                          <div className='space-y-2'>
                            <p className='text-lg md:text-xl font-semibold'>
                              {item.name}
                            </p>
                            {item.ingredients?.length > 0 && (
                              <p className='text-sm text-gray-200 leading-snug'>
                                <span className='font-semibold text-primary'>Ingredientes:</span>{' '}
                                {item.ingredients.join(', ')}
                              </p>
                            )}
                            {item.contains?.length > 0 && (
                              <p className='text-sm text-gray-300 leading-snug'>
                                <span className='font-semibold text-red-400'>Contiene:</span>{' '}
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
            ))
          )}
        </div>

        {/* 📜 Pop-up del menú completo */}
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
