import Galeria from "@/components/galeria/Galeria";
import { GaleryPicture } from "@/components/galeria/PictureModel";
import { getGaleryPictures } from "@/helpers/api-utils";


function GaleriaPage({pictures}:{pictures: GaleryPicture[]}){
    
    return(
        <Galeria pictures={pictures}/>
    );
}

export async function getStaticProps() {
    
    const pictures = await getGaleryPictures();
    
    return {
        props: { pictures: pictures },
      }
}

export default GaleriaPage;