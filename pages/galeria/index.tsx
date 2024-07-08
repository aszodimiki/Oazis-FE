import Galeria from "@/components/galeria/Galeria";
import { GaleryPicture } from "@/components/galeria/PictureModel";
import { getGaleryPictures } from "@/helpers/api-utils";
import Head from "next/head";


function GaleriaPage({pictures}:{pictures: GaleryPicture[]}){
    
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
                <meta property="og:url" content='https://oazisvendeglo.hu/galeria' />
                <link rel="canonical" href="https://oazisvendeglo.hu/galeria" />
            </Head>
            <Galeria pictures={pictures}/>
            </>
        
    );
}

export async function getStaticProps() {
    
    const pictures = await getGaleryPictures();
    
    return {
        props: { pictures: pictures },
      }
}

export default GaleriaPage;