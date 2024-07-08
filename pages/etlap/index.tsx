import FoodMenu from '@/components/FoodMenu/FoodMenu';
import { getProductTypes, getProductsByType } from '@/helpers/api-utils';
import React, { useState } from 'react';
import Head from 'next/head';

interface PropductProps {
  productTypes: ProductType[];
  products: Product[];
  initialCategory: string;
} 

const Menu = ({productTypes, products, initialCategory}: PropductProps) => {
  
  return (
    <>
    <Head>
        <title>Oázis Vendéglő - Étlap</title>
        <meta name="description" content="Tekintse meg az Oázis Vendéglő étlapját, ahol finom sültek, hamburgerek, pizzák, gyros és levesek várják Önt Tápiószentmártonban." />
        <meta name="keywords" content="Oázis Vendéglő, étlap, sültek, hamburgerek, pizzák, gyros, levesek, Tápiószentmárton étterem" />
        <link rel="canonical" href="https://oazisvendeglo.hu/etlap" />

        <meta property="og:title" content="Oázis Vendéglő - Étlap" />
        <meta property="og:description" content="Tekintse meg az Oázis Vendéglő étlapját, ahol finom sültek, hamburgerek, pizzák, gyros és levesek várják Önt Tápiószentmártonban." />
        <meta property="og:image" content="../../public/oazis-background.png" />
        <meta property="og:url" content="https://oazisvendeglo.hu/etlap" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Oázis Vendéglő - Étlap" />
        <meta name="twitter:description" content="Tekintse meg az Oázis Vendéglő étlapját, ahol finom sültek, hamburgerek, pizzák, gyros és levesek várják Önt Tápiószentmártonban." />
        <meta name="twitter:image" content="../../public/oazis-background.png" />
      </Head>
    <FoodMenu productTypes={productTypes} products={products} initialCategory={initialCategory}></FoodMenu>
    </>
  );
};

export default Menu;

export async function getServerSideProps() {
  const productTypes = await getProductTypes();
  
  const prodictType = productTypes ? productTypes[0].typeName : '';
  const products = await getProductsByType(prodictType);
  return {
      props: { productTypes, products, initialCategory: prodictType},
    }
}
