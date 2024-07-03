import Product from "@/components/products/product/Product";
import Loader from "@/components/ui/Loader";
import { getProductsByType } from "@/helpers/api-utils";
import { GetServerSideProps } from 'next'
import { useEffect, useState } from "react";

interface PropductProps {
    products: Product[];
  }

function ProductType({products}: PropductProps){
    const [data, setData] =useState<Product[]>();

    useEffect(()=> {
        setData(products)
    },[products])

    return(
        <div>{data?<Product key={products.length} products={products}/>: <Loader/> }</div>
    );
}

export const getServerSideProps: GetServerSideProps= async (context) => {
    const {params} = context;
    const productType = params?.productType as string;
    const result = await getProductsByType(productType);
    
    return {
        props: { products: result },
      }
}

export default ProductType;