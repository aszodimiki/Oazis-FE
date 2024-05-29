import DrinkMenu from '@/components/drinkMenu/DrinkMenu';
import { getProductTypes, getProductsByType } from '@/helpers/api-utils';
import React, { useState } from 'react';

interface PropductProps {
  productTypes: ProductType[];
  products: Product[];
  initialCategory: string;
} 

const Drinks = ({productTypes, products, initialCategory}: PropductProps) => {
  
  return (
    <DrinkMenu productTypes={productTypes} products={products} initialCategory={initialCategory}></DrinkMenu>
  );
};

export default Drinks;

export async function getServerSideProps() {
  const productTypes = await getProductTypes();
  const prodictType = productTypes ? productTypes[0].typeName : '';
  const products = await getProductsByType(prodictType);
  
  return {
      props: { productTypes, products, initialCategory: prodictType},
    }
}
