import { GalleryImagesType } from '@/app/types/galleryimage'

type GalleryCategoryType = {
  title: string
  items: GalleryImagesType[]
}

export const GalleryImagesData: GalleryCategoryType[] = [
  {
    title: 'Starters',
    items: [
      {
        src: '/images/Menu/Starters/alitas.webp',
        name: 'Alitas a la Brasa',
        price: 35,
        ingredients: [
          '4 jugosas alitas de pollo de corral XL',
          'Cocinadas a baja temperatura y terminadas en el horno de carbón Josper',
          'Elige tu salsa favorita',
        ],
        contains: ['Lácteos', 'Gluten', 'Huevo'],
      },
    ],
  },
  {
    title: 'Perfect to Share',
    items: [
      {
        src: '/images/Menu/Perfect to Share/aros.webp',
        name: 'Onions Jenkins',
        price: 35,
        ingredients: ['Crujientes aros de cebolla rebozados en panko japonés'],
        contains: ['Lácteos', 'Gluten', 'Huevo'],
      },
    ],
  },
  {
    title: 'One by One',
    items: [
      {
        src: '/images/Menu/One by One/croquetas1.webp',
        name: 'Croquetas de rabo de toro',
        price: 42,
        ingredients: [
          'Elaboradas a partir de estofado de rabo de toro casero',
          'Acompañadas de mayonesa de trufa negra',
        ],
        contains: [],
      },
    ],
  },
  {
    title: 'Fries',
    items: [
      {
        src: '/images/Menu/Starters/alitas.webp',
        name: 'Classic Fries',
        price: 18,
        ingredients: ['Papas fritas crujientes', 'Sal marina', 'Aceite vegetal'],
        contains: [],
      },
    ],
  },
  {
    title: 'Burgers',
    items: [
      {
        src: '/images/Menu/Burgers/pollo crunch.webp',
        name: 'BBQ Bacon Burger (610 Kcal)',
        price: 25,
        ingredients: [
          'Pan brioche',
          'Carne de res 200g',
          'Bacon crujiente',
          'Cebolla caramelizada',
          'Salsa BBQ',
        ],
        contains: ['Gluten'],
      },
    ],
  },
  {
    title: 'The genuines',
    items: [
      {
        src: '/images/Menu/Starters/alitas.webp',
        name: 'Ribeye Steak (350g)',
        price: 48,
        ingredients: [
          'Ribeye a la parrilla',
          'Sal marina',
          'Pimienta negra',
          'Mantequilla de hierbas',
        ],
        contains: ['Lácteos'],
      },
    ],
  },
  {
    title: 'The biggest ones',
    items: [
      {
        src: '/images/Menu/Starters/alitas.webp',
        name: 'Tomahawk Steak (800g)',
        price: 85,
        ingredients: [
          'Tomahawk de res a la parrilla',
          'Sal marina gruesa',
          'Aceite de oliva virgen extra',
        ],
        contains: [],
      },
    ],
  },
  {
    title: 'Brasas',
    items: [
      {
        src: '/images/Menu/Starters/alitas.webp',
        name: 'Entrecot de ternera (300g)',
        price: 45,
        ingredients: ['Entrecot de ternera', 'Sal gruesa', 'Aceite de oliva'],
        contains: [],
      },
    ],
  },
  {
    title: 'Hall of fame',
    items: [
      {
        src: '/images/Menu/Starters/alitas.webp',
        name: 'Cheesecake de frutos rojos',
        price: 9,
        ingredients: ['Queso crema', 'Galleta', 'Frutos rojos'],
        contains: ['Lácteos', 'Gluten'],
      },
    ],
  },
  {
    title: 'Menu infantil',
    items: [
      {
        src: '/images/Menu/Starters/alitas.webp',
        name: 'Mini Burger Kids',
        price: 15,
        ingredients: [
          'Mini hamburguesa de res 100g',
          'Pan suave',
          'Queso cheddar',
          'Papas fritas',
        ],
        contains: ['Gluten', 'Lácteos'],
      },
    ],
  },
  {
    title: 'Ensaladas',
    items: [
      {
        src: '/images/Menu/Starters/alitas.webp',
        name: 'Caesar Salad (187 Kcal)',
        price: 35,
        ingredients: [
          'Lechuga romana',
          'Pollo a la parrilla',
          'Queso parmesano',
          'Crutones',
          'Salsa César',
        ],
        contains: ['Lácteos', 'Gluten', 'Huevo'],
      },
    ],
  },
  {
    title: 'Extras',
    items: [
      {
        src: '/images/Menu/Starters/alitas.webp',
        name: 'Limonada natural',
        price: 6,
        ingredients: ['Limón', 'Agua', 'Miel'],
        contains: [],
      },
    ],
  },
  {
    title: 'Postres',
    items: [
      {
        src: '/images/Menu/Postres/brownie.webp',
        name: 'Brownie con helado',
        price: 10,
        ingredients: [
          'Chocolate',
          'Mantequilla',
          'Azúcar',
          'Harina',
          'Helado de vainilla',
        ],
        contains: ['Lácteos', 'Gluten', 'Huevo'],
      },
    ],
  },
];
