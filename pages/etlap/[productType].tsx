import Product from "@/components/products/product/Product";
import Loader from "@/components/ui/Loader";
import { getProductsByType } from "@/helpers/api-utils";
import { log } from "console";
import { GetServerSideProps } from 'next'
import Head from "next/head";
import { useEffect, useState } from "react";

interface PropductProps {
    products: Product[];
    productType: string;
  }

function ProductType({products, productType }: PropductProps){
    const [data, setData] =useState<Product[]>();
    
    useEffect(()=> {        
        setData(products)
    },[products])

    return(
        <>
            <Head>
                <title>{`Oázis Vendéglő - ${productType.charAt(0).toUpperCase() + productType.slice(1)}`}</title>
                <meta name="description" content={`Próbálja ki az Oázis Vendéglő ${productType}-t Tápiószentmártonban. Finom és ízletes ételek várják Önt!`} />
                <meta name="keywords" content={`Oázis, Oázis Büfé, Oázis étterem, Oázis vendéglő, Oázis pizzéria, ${productType}, étel, Tápiószentmárton étterem`} />
                <link rel="canonical" href={`https://oazisvendeglo.hu/etlap/${productType}`} />
                <meta property="og:title" content={`Oázis Vendéglő - ${productType.charAt(0).toUpperCase() + productType.slice(1)}`} />
                <meta property="og:description" content={`Próbálja ki az Oázis Vendéglő ${productType}-t Tápiószentmártonban. Finom és ízletes ételek várják Önt!`} />
                <meta property="og:image" content="../../public/oazis-background.png" />
                <meta property="og:url" content={`https://oazisvendeglo.hu/etlap/${productType}`} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`Oázis Vendéglő - ${productType.charAt(0).toUpperCase() + productType.slice(1)}`} />
                <meta name="twitter:description" content={`Próbálja ki az Oázis Vendéglő ${productType}-t Tápiószentmártonban. Finom és ízletes ételek várják Önt!`} />
                <meta name="twitter:image" content="../../public/oazis-background.png" />
            </Head>
            {data?<Product key={products.length} products={products}/>: <Loader/> }
        </>
    );
}

export const getServerSideProps: GetServerSideProps= async (context) => {
    const {params} = context;
    const productType = params?.productType as string;
    const products = await getProductsByType(productType);
    
    return {
        props: { products, productType},
      }
}

export default ProductType;