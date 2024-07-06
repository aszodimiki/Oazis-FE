import Drink from "@/components/products/drink/Drink";
import Product from "@/components/products/product/Product";
import Loader from "@/components/ui/Loader";
import { getDrinksByType, getProductsByType } from "@/helpers/api-utils";
import { GetServerSideProps } from 'next'
import Head from "next/head";
import { useEffect, useState } from "react";

interface PropductProps {
    drinks: Drink[];
  }

function ProductType({drinks}: PropductProps){
    const [data, setData] =useState<Drink[]>();

    useEffect(()=> {
        setData(drinks)
    },[drinks])

    return(
        <>
            <Head>
                <title>{drinks.join(", ")}</title>
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
        {data?<Drink key={drinks.length} drinks={drinks}/>: <Loader/> }
        </>
    );
}

export const getServerSideProps: GetServerSideProps= async (context) => {
    const {params} = context;
    const productType = params?.productType as string;
    const drinks = await getDrinksByType(productType);
    
    return {
        props: { drinks },
      }
}

export default ProductType;