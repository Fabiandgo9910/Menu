import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { FeaturesType } from '@/app/types/features'
import { ExpertChiefType } from '@/app/types/expertchief'
import { GalleryImagesType } from '@/app/types/galleryimage'
import { FooterLinkType } from '@/app/types/footerlink'
import { FullMenuType } from '@/app/types/fullmenu'

const HeaderData: HeaderItem[] = [
  { label: 'About Us', href: '/#aboutus' },
  { label: 'Menu', href: '/#menu' },
  { label: 'Reserve Table', href: '/#reserve' },
  { label: 'Docs', href: '/documentation' },
]

const FeaturesData: FeaturesType[] = [
  {
    imgSrc: '/images/Features/featureOne.svg',
    heading: 'Elegant Dining Atmosphere',
    subheading:
      'Enjoy a warm, refined space perfect for intimate dinners or small group gatherings.',
  },
  {
    imgSrc: '/images/Features/featureThree.svg',
    heading: 'Signature Chef Creations',
    subheading:
      'Taste one-of-a-kind dishes crafted with passion by our top culinary team.',
  },
  {
    imgSrc: '/images/Features/featureTwo.svg',
    heading: 'Fresh, Local Ingredients',
    subheading:
      'We use locally sourced goods daily for unmatched taste and quality.',
  },
  {
    imgSrc: '/images/Features/featureFour.svg',
    heading: 'Hassle-Free Reservations',
    subheading:
      'Reserve online in seconds or walk in anytime — we’re ready when you are.',
  }
]

const ExpertChiefData: ExpertChiefType[] = [
  {
    profession: 'Senior Chef',
    name: 'Marco Benton',
    imgSrc: '/images/Expert/boyone.png',
  },
  {
    profession: 'Junior Chef',
    name: 'Elena Rivera',
    imgSrc: '/images/Expert/girl.png',
  },
  {
    profession: 'Junior Chef',
    name: 'John Doe',
    imgSrc: '/images/Expert/boytwo.png',
  },
  {
    profession: 'Junior Chef',
    name: 'John Doe',
    imgSrc: '/images/Expert/boytwo.png',
  },
  {
    profession: 'Junior Chef',
    name: 'John Doe',
    imgSrc: '/images/Expert/boytwo.png',
  },
]


export type GalleryCategoryType = {
  title: string
  items: GalleryImagesType[]
}

export const GalleryImagesData: GalleryCategoryType[] = [
  {
    title: 'Entrantes',
    items: [
      {
        src: '/images/Gallery/foodone.webp',
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
      {
        src: '/images/Gallery/foodtwo.webp',
        name: 'Christmas Salad (118 Kcal)',
        price: 17,
        ingredients: [
          'Espinaca',
          'Granada',
          'Nueces',
          'Queso de cabra',
          'Vinagreta balsámica',
        ],
        contains: ['Frutos secos', 'Lácteos'],
      },
      {
        src: '/images/Gallery/foodone.webp',
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
    title: 'Burgers',
    items: [
      {
        src: '/images/Logo/unnamed.webp',
        name: 'Classic Burger (540 Kcal)',
        price: 22,
        ingredients: [
          'Pan artesanal',
          'Carne de res 200g',
          'Queso cheddar',
          'Lechuga',
          'Tomate',
          'Salsa especial',
        ],
        contains: ['Gluten', 'Lácteos'],
      },
      {
        src: '/images/Gallery/burger2.webp',
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
    title: 'Steaks',
    items: [
      {
        src: '/images/Gallery/steak1.webp',
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
      {
        src: '/images/Gallery/steak2.webp',
        name: 'Filete de ternera (280g)',
        price: 42,
        ingredients: ['Filete de ternera', 'Aceite de oliva', 'Romero fresco'],
        contains: [],
      },
    ],
  },
  {
    title: 'Bebidas',
    items: [
      {
        src: '/images/Gallery/drink1.webp',
        name: 'Limonada natural',
        price: 6,
        ingredients: ['Limón', 'Agua', 'Miel'],
        contains: [],
      },
      {
        src: '/images/Gallery/drink2.webp',
        name: 'Té helado con menta',
        price: 5,
        ingredients: ['Té negro', 'Menta', 'Hielo', 'Azúcar moreno'],
        contains: [],
      },
    ],
  },
  {
    title: 'Postres',
    items: [
      {
        src: '/images/Gallery/dessert1.webp',
        name: 'Cheesecake de frutos rojos',
        price: 9,
        ingredients: ['Queso crema', 'Galleta', 'Frutos rojos'],
        contains: ['Lácteos', 'Gluten'],
      },
      {
        src: '/images/Gallery/dessert2.webp',
        name: 'Brownie con helado',
        price: 10,
        ingredients: ['Chocolate', 'Mantequilla', 'Azúcar', 'Harina', 'Helado de vainilla'],
        contains: ['Lácteos', 'Gluten', 'Huevo'],
      },
    ],
  },
  {
    title: 'Cafés',
    items: [
      {
        src: '/images/Gallery/coffee1.webp',
        name: 'Café espresso',
        price: 3,
        ingredients: ['Café molido 100% arábica'],
        contains: [],
      },
      {
        src: '/images/Gallery/coffee2.webp',
        name: 'Cappuccino',
        price: 4.5,
        ingredients: ['Café espresso', 'Leche vaporizada', 'Espuma de leche'],
        contains: ['Lácteos'],
      },
    ],
  },
]


const FullMenuData: FullMenuType[] = [
  {
    name: 'Grilled Salmon',
    price: '$18.99',
    description: 'Served with lemon butter sauce and grilled vegetables.',
  },
  {
    name: 'Caesar Salad',
    price: '$9.99',
    description: 'Crisp romaine with parmesan, croutons, and Caesar dressing.',
  },
  {
    name: 'Margherita Pizza',
    price: '$13.49',
    description: 'Classic pizza with tomato, mozzarella, and fresh basil.',
  },
  {
    name: 'Tomato Basil Soup',
    price: '$6.99',
    description: 'Creamy tomato soup with a hint of garlic and fresh basil.',
  },
  {
    name: 'Chocolate Lava Cake',
    price: '$7.99',
    description:
      'Warm chocolate cake with a molten center served with vanilla ice cream.',
  },
  {
    name: 'Spaghetti Carbonara',
    price: '$15.25',
    description:
      'Spaghetti tossed with eggs, pancetta, parmesan, and black pepper.',
  },
  {
    name: 'Tiramisu',
    price: '$8.50',
    description:
      'Layered espresso-soaked ladyfingers with mascarpone and cocoa.',
  },
]

const FooterLinkData: FooterLinkType[] = [
  {
    section: 'Company',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/#aboutus' },
      { label: 'Menu', href: '/#menu' },
      { label: 'Reserve Table', href: '/#reserve' },
    ],
  },
  {
    section: 'Support',
    links: [
      { label: 'Help/FAQ', href: '/' },
      { label: 'Press', href: '/' },
      { label: 'Affiliates', href: '/' },
      { label: 'Hotel owners', href: '/' },
      { label: 'Partners', href: '/' },
    ],
  },
]

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    FeaturesData,
    ExpertChiefData,
    GalleryImagesData,
    FullMenuData,
    FooterLinkData,
  })
}
