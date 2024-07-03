import FoodMenu from '@/components/FoodMenu/FoodMenu';
import { getProductTypes, getProductsByType } from '@/helpers/api-utils';
import React, { useState } from 'react';
import ProductType from './[productType]';

interface PropductProps {
  productTypes: ProductType[];
  products: Product[];
  initialCategory: string;
} 

const Menu = ({productTypes, products, initialCategory}: PropductProps) => {
  
  return (
    <FoodMenu productTypes={productTypes} products={products} initialCategory={initialCategory}></FoodMenu>
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
