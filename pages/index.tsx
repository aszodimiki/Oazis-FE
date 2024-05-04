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
  
  return (
      <Home carouselModels={carousels} gridBlocks={gridBlocks} />
  );
}

export async function getServerSideProps() {
  const carousels = await getCarousels();
  const gridBlocks = await getHomeTexts();
  
  return {
      props: { carousels: carousels, gridBlocks: gridBlocks },
    }
}
