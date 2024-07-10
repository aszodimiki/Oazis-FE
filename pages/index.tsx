import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Carousel from '@/components/carousel/Carousel'
import TextContainer from '@/components/layout/TextContainer'
import Home from '@/components/home/Home'
import { CarouselModel } from '@/components/carousel/CarouselModel'
import { getCarousels, getHomeTexts } from '@/helpers/api-utils'
import { GridBlock } from '@/components/Models/Grid/GridBlock'

const inter = Inter({ subsets: ['latin'] })

interface HomePageDatas {
  carousels: CarouselModel[];
  gridBlocks: GridBlock[]
}  

export default function HomePage({carousels, gridBlocks}: HomePageDatas) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Oázis Vendéglő",
    "url": "https://oazisvendeglo.hu",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kossuth Lajos út 78.",
      "addressLocality": "Tápiószentmárton",
      "postalCode": "2711",
      "addressCountry": "HU"
    },
    "menu": "https://oazisvendeglo.hu/etlap",
    "servesCuisine": ["Sültek", "Hamburgerek", "Pizzák", "Gyros", "Levesek"],
    "telephone": "+36-30-380-6728"
  }
  
  return (
    <>
     <Head>
     <meta name="description" content="Oázis Vendéglő Tápiószentmárton,finom sültek, hamburgerek, pizzák, gyros, levesek várják Önt. Cím: 2711, Tápiószentmárton Kossuth Lajos út 78." />
        <meta name="keywords" content="Oázis, Oázis Büfé, Oázis étterem, Oázis vendéglő, Oázis pizzéria, pizzéria, Tápiószentmárton étterem, Tápiószentmárton büfé, sültek, hamburgerek, pizzák, gyros, levesek" />
        <meta name="author" content="Oázis Vendéglő" />
        <link rel="canonical" href="https://oazisvendeglo.hu/" />
        <meta property="og:title" content="Oázis Vendéglő - Tápiószentmárton Étterem és Büfé" />
        <meta property="og:description" content="Látogasson el az Oázis Vendéglőbe Tápiószentmártonban, ahol finom sültek, hamburgerek, pizzák, gyros és levesek várják Önt. Cím: 2711, Tápiószentmárton Kossuth Lajos út 78." />
        <meta property="og:image" content="../public/oazis-background.png" />
        <meta property="og:url" content="https://oazisvendeglo.hu/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Oázis Vendéglő - Tápiószentmárton Étterem és Büfé" />
        <meta name="twitter:description" content="Látogasson el az Oázis Vendéglőbe Tápiószentmártonban, ahol finom sültek, hamburgerek, pizzák, gyros és levesek várják Önt. Cím: 2711, Tápiószentmárton Kossuth Lajos út 78." />
        <meta name="twitter:image" content="../public/oazis-background.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
        <Home carouselModels={carousels} gridBlocks={gridBlocks} />
    </>
    
  );
}

export async function getServerSideProps() {
  const carousels = await getCarousels();
  const gridBlocks = await getHomeTexts();
  
  return {
      props: { carousels: carousels, gridBlocks: gridBlocks },
    }
}
