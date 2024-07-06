import DrinkMenu from '@/components/drinkMenu/DrinkMenu';
import { getDrinksByType, getDrinkTypes } from '@/helpers/api-utils';
import Head from 'next/head';
import React, { useState } from 'react';

interface DrinkProps {
  drinkTypes: ProductType[];
  drinks: Drink[];
  initialCategory: string;
} 

const Drinks = ({drinkTypes, drinks, initialCategory}: DrinkProps) => {
  
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
        <DrinkMenu drinkTypes={drinkTypes} drinks={drinks} initialCategory={initialCategory}></DrinkMenu>
    </>

  );
};

export default Drinks;

export async function getServerSideProps() {
  const drinkTypes = await getDrinkTypes();  
  const drinkType = drinkTypes ? drinkTypes[0].typeName : '';
  const drinks = await getDrinksByType(drinkType);
  
  return {
      props: { drinkTypes, drinks, initialCategory: drinkType},
    }
}
