import Image from 'next/image'
import { useState } from "react";
import classes from './Picture.module.css';
import { GaleryPicture } from './PictureModel';

const Picture = ({picture}:{picture: GaleryPicture}) =>{
    const [display, setDisplay] = useState(false);
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    
    const imageLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
        return `${src}?w=${width}&q=${quality || 75}`
      }

    return(
        <li className={classes.item} onClick={() => setDisplay(!display)}>
            <Image className={classes.galeria_image} loader={imageLoader} src={baseUrl+picture?.imageUrl} fill={true} sizes='250' alt={picture.title} priority/>
            <div className={`${display ? classes.fullpage_container : ''}`} style={{ display: display ? "block" : "none"}}>
                <div className={`${display ? classes.fullpage_image : ''}`} style={{ backgroundImage:`url(${baseUrl+picture?.imageUrl})`, display: display ? "block" : "none"}}></div>
            </div>
        </li>
    );
}

export default Picture;