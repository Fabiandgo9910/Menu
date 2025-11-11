import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Features from '@/app/components/Home/Features'
import Cook from '@/app/components/Home/Cook'
import Expert from '@/app/components/Home/Expert'
import Gallery from '@/app/components/Home/Gallery'
import Newsletter from '@/app/components/Home/Newsletter'
import { Metadata } from 'next'
import ContactForm from './components/Contact/Form'
export const metadata: Metadata = {
  title: "Jenkin's - Restaurante",
  description: "Disfruta de los mejores platos, bebidas y postres en Jenkin's. Menú para compartir, ensaladas frescas, hamburguesas, carnes y postres irresistibles.",
  keywords: [
    "restaurante", "café", "comida", "hamburguesas", "ensaladas",
    "postres", "bebidas", "menú", "Jenkin's", "parrilla", "steak"
  ],
  authors: [{ name: "Jenkin's", url: "https://tusitio.com" }],
  category: "Food & Drink",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png', // si quieres icono para iOS
  },
  openGraph: {
    title: "Jenkin's - Restaurante y Café",
    description: "Disfruta de los mejores platos, bebidas y postres en Jenkin's.",
    url: "https://tusitio.com",
    siteName: "Jenkin's",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Jenkin's Restaurante",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jenkin's - Restaurante y Café",
    description: "Disfruta de los mejores platos, bebidas y postres en Jenkin's.",
    images: ["/images/og-image.webp"],
    site: "@tuTwitter",
    creator: "@tuTwitter",
  },
}

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Features />
      <Cook />
      <Expert /> */}
      <Gallery />
      {/* <ContactForm />
      <Newsletter /> */}
    </main>
  )
}
