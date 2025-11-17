'use client'
import Image from 'next/image'
import Masonry from 'react-masonry-css'
import { useEffect, useMemo, useState } from 'react'
import GalleryImagesSkeleton from '../../Skeleton/GalleryImages'
import { Icon } from '@iconify/react'
import { GalleryImagesType } from '@/app/types/galleryimage'
import { FullMenuType } from '@/app/types/fullmenu'

type GallerySubcategoryType = {
  title: string
  items: GalleryImagesType[]
}

type GalleryCategoryType = {
  title: string
  subcategories: GallerySubcategoryType[]
}

const Gallery = () => {
  const [galleryCategories, setGalleryCategories] = useState<GalleryCategoryType[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [filtering, setFiltering] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        const data = await res.json()
        setGalleryCategories(data.GalleryImagesData)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const filteredData = useMemo(() => {
    let result = [...galleryCategories]
    const q = searchQuery.toLowerCase().trim()

    if (selectedCategories.length) {
      result = result.filter(c => selectedCategories.includes(c.title))
    }

    if (q) {
      result = result.map(cat => ({
        ...cat,
        subcategories: cat.subcategories
          .map(sub => ({
            ...sub,
            items: sub.items.filter(item => {
              const name = item.name.toLowerCase()
              const ing = item.ingredients.join(' ').toLowerCase()
              return name.includes(q) || ing.includes(q)
            }),
          }))
          .filter(s => s.items.length),
      })).filter(c => c.subcategories.length)
    }

    if (selectedSubcategories.length) {
      result = result.map(cat => ({
        ...cat,
        subcategories: cat.subcategories.filter(sub =>
          selectedSubcategories.includes(sub.title)
        ),
      })).filter(c => c.subcategories.length)
    }

    return result
  }, [galleryCategories, selectedCategories, selectedSubcategories, searchQuery])

  const toggleCategory = (title: string) => {
    setSelectedCategories(prev =>
      prev.includes(title) ? prev.filter(x => x !== title) : [...prev, title]
    )
    setSelectedSubcategories([])
    setFiltering(true)
    setTimeout(() => setFiltering(false), 300)
  }

  const toggleSubcategory = (title: string) => {
    setSelectedSubcategories(prev =>
      prev.includes(title) ? prev.filter(x => x !== title) : [...prev, title]
    )
    setFiltering(true)
    setTimeout(() => setFiltering(false), 300)
  }

  const clearAllFilters = () => {
    setSelectedCategories([])
    setSelectedSubcategories([])
    setSearchQuery('')
  }

  return (
    <section id='menu' className='scroll-mt-20'>
      <div className='container'>
        <div className='text-center mb-10'>
          <p className='text-primary text-lg tracking-widest uppercase'>Menú</p>
          <h2 className='text-white'>Nuestra Carta</h2>
        </div>

        <div className='flex justify-center mb-8'>
          <input
            type='text'
            placeholder='Buscar plato, ingrediente...'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className='w-full max-w-md px-4 py-2 rounded-full bg-neutral-800 text-white border border-gray-600 focus:border-primary'
          />
        </div>

        {!loading && (
          <div className='flex flex-wrap justify-center gap-3 mb-6'>
            {galleryCategories.map(cat => (
              <button
                key={cat.title}
                onClick={() => toggleCategory(cat.title)}
                className={`px-4 py-2 rounded-full border text-sm transition-all ${selectedCategories.includes(cat.title)
                  ? 'bg-primary text-white border-primary scale-105'
                  : 'border-gray-500 text-gray-300 hover:bg-primary/20'
                  }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        )}

        {!loading && (
          <div className='flex flex-wrap justify-center gap-2 mb-6'>
            {galleryCategories.flatMap(cat =>
              cat.subcategories.map(sub => (
                selectedCategories.length === 0 || selectedCategories.includes(cat.title) ? (
                  <button
                    key={`${cat.title}-${sub.title}`} // Clave única
                    onClick={() => toggleSubcategory(sub.title)}
                    className={`px-3 py-1 rounded-full border text-xs transition ${selectedSubcategories.includes(sub.title)
                      ? 'bg-secondary text-white border-secondary scale-105'
                      : 'border-gray-400 text-gray-300 hover:bg-secondary/20'
                      }`}
                  >
                    {sub.title}
                  </button>
                ) : null
              ))
            )}
          </div>
        )}

        {(selectedCategories.length || selectedSubcategories.length || searchQuery) && (
          <div className='flex items-center justify-center gap-3 text-primary mb-8'>
            <Icon icon='mdi:filter' width={22} />
            <button
              onClick={clearAllFilters}
              className='px-3 py-1 rounded-full border border-red-400 text-red-400 hover:bg-red-400 hover:text-white'
            >
              Limpiar filtros
            </button>
          </div>
        )}

        <div className={`my-16 px-6 space-y-20 transition ${filtering ? 'opacity-50 scale-[0.98]' : 'opacity-100 scale-100'}`}>
          {loading ? (
            <div className='flex flex-wrap gap-8 justify-center'>
              {Array.from({ length: 9 }).map((_, i) => (
                <GalleryImagesSkeleton key={i} />
              ))}
            </div>
          ) : filteredData.length ? (
            filteredData.map((category, idx) => (
              <div key={idx}>
                <h3 className='text-3xl font-semibold text-primary mb-8 text-center'>{category.title}</h3>
                {category.subcategories.map((subcategory, sIdx) => (
                  <div key={sIdx} className='mb-12'>
                    <h4 className='text-2xl text-white text-center mb-6'>{subcategory.title}</h4>
                    <Masonry
                      breakpointCols={{ default: 3, 1100: 2, 700: 1 }}
                      className='flex gap-8'
                      columnClassName='masonry-column'
                    >
                      {subcategory.items.map((item, index) => (
                        <div key={index} className='relative overflow-hidden rounded-3xl mb-8 group shadow-lg hover:scale-[1.02] transition'>
                          <div className='relative w-full h-[380px]'>
                            <Image
                              src={item.src}
                              alt={item.name}
                              fill
                              className='object-cover group-hover:scale-105 transition'
                            />
                            <div className='absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition p-6 flex flex-col justify-end'>
                              <p className='text-xl font-semibold text-white'>{item.name}</p>
                              {item.ingredients?.length > 0 && (
                                <p className='text-sm text-gray-200'>
                                  <span className='text-primary font-semibold'>Ingredientes:</span> {item.ingredients.join(', ')}
                                </p>
                              )}
                              <p className='text-xl mt-4 text-primary font-bold'>{item.price} €</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Masonry>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <div className='text-center py-16 text-gray-400'>
              <Icon icon='mdi:food-off' width={60} className='mx-auto mb-4' />
              <h3 className='text-2xl mb-2'>Sin resultados</h3>
              <button
                onClick={clearAllFilters}
                className='px-6 py-2 bg-primary text-white rounded-full'
              >
                Mostrar todo
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Gallery
