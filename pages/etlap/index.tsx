import FoodMenu from '@/components/FoodMenu/FoodMenu';
import { getProductTypes, getProductsByType } from '@/helpers/api-utils';
import React, { useState } from 'react';
import ProductType from './[productType]';
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
        <title>Étlap</title>
        <meta
            name="description"
            content="Oazis Vendéglő és Pizzéria, ahol a finom ételek és a kellemes környezet találkozik."
          />
        <meta name="keywords" content="oázis vendéglő, oázis büfé, étterem, étlap, itallap, galéria, információk, pizza, rántott hús, sertés, szárnyas, hamburger, gyros, desszertek, főételek" />
        <meta property="og:title" content="Oázis Vendéglő és Pizzéria" />
        <meta property="og:description" content="Magyaros ízek, hamburgerek, sültek, pizzák, gyros" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content='https://oazisvendeglo.hu/menu' />
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
