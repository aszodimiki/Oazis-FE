import FoodTypeOfList from "@/components/products/FoodTypes/FoodTypeOfList";
import { GetServerSideProps } from 'next'
import { useEffect, useState } from "react";
import { getProductTypes } from "@/helpers/api-utils";
import Loader from "@/components/ui/Loader";

interface PropductProps {
    productTypes: ProductType[];
}    


function Menu2({productTypes}: PropductProps){
    const [data, setData] =useState<ProductType[]>();

    useEffect(()=> {
        setData(productTypes)
    },[productTypes])
    
    return(
        <div>{data?<FoodTypeOfList productTypes={productTypes}/>: <Loader/> }</div>
    );
}

export async function getServerSideProps() {
    const result = await getProductTypes();

    return {
        props: { productTypes: result },
      }
}

export default Menu2;

