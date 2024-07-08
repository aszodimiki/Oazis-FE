import { Informations } from "@/components/informations/InformationModels";
import InformationsComponent from "@/components/informations/Informations";
import Loader from "@/components/ui/Loader";
import { getInformations } from "@/helpers/api-utils";
import Head from "next/head";
import React, { useEffect, useState } from 'react';

interface InformationsProps {
    informations: Informations;
}  

function InformationPage({informations}: InformationsProps){
    const [data, setData] =useState<Informations>();

    useEffect(()=> {
        setData(informations)
    },[informations])

    return(
        <>
            <Head>
                <title>Információk</title>
                <meta
                    name="description"
                    content="Étel kiszállítás és asztalfoglalás a Oázis Vendéglő és Pizzériában."
                />
                 <meta name="keywords" content="oázis vendéglő, oázis büfé, étterem, étlap, itallap, galéria, információk, pizza, rántott hús, sertés, szárnyas, hamburger, gyros, desszertek, főételek" />
                <meta property="og:title" content="Oázis Vendéglő és Pizzéria" />
                <meta property="og:description" content="Magyaros ízek, hamburgerek, sültek, pizzák, gyros" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content='https://oazisvendeglo.hu/informaciok' />
                <link rel="canonical" href="https://oazisvendeglo.hu/informaciok" />
            </Head>
        {data?<InformationsComponent informations={informations}/>: <Loader/> }
        </>
    );
}

export async function getServerSideProps() {
    const data = await getInformations();

    return {
        props: {informations: data}
      };
}

export default InformationPage;

