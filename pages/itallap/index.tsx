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
        <title>Oázis Vendéglő - Italok</title>
        <meta name="description" content="Tekintse meg az Oázis Vendéglő italok kínálatát, ahol frissítők, borok, sörök és koktélok várják Önt Tápiószentmártonban." />
        <meta name="keywords" content="Oázis Vendéglő, italok, frissítők, borok, sörök, koktélok, Tápiószentmárton étterem" />
        <link rel="canonical" href="https://oazisvendeglo.hu/itallap" />

        <meta property="og:title" content="Oázis Vendéglő - Italok" />
        <meta property="og:description" content="Tekintse meg az Oázis Vendéglő italok kínálatát, ahol frissítők, borok, sörök és koktélok várják Önt Tápiószentmártonban." />
        <meta property="og:image" content="../../public/oazis-background.png" />
        <meta property="og:url" content="https://oazisvendeglo.hu/itallap" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Oázis Vendéglő - Italok" />
        <meta name="twitter:description" content="Tekintse meg az Oázis Vendéglő italok kínálatát, ahol frissítők, borok, sörök és koktélok várják Önt Tápiószentmártonban." />
        <meta name="twitter:image" content="../../public/oazis-background.png" />
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
