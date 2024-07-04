import Product from "@/components/products/product/Product";
import Loader from "@/components/ui/Loader";
import { getProductsByType } from "@/helpers/api-utils";
import { GetServerSideProps } from 'next'
import Head from "next/head";
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
        <>
            <Head>
                <title>{products.join(", ")}</title>
                <meta
                    name="description"
                    content="Oazis Vendéglő és Pizzéria, ahol a finom ételek és a kellemes környezet találkozik."
                />
                <meta property="og:title" content="Oázis Vendéglő és Pizzéria" />
                <meta property="og:description" content="Magyaros ízek, hamburgerek, sültek, pizzák, gyros" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content='https://oazisvendeglo.hu/menu' />
            </Head>
        {data?<Product key={products.length} products={products}/>: <Loader/> }
        </>
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