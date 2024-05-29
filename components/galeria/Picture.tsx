import Image from 'next/image'
import { useState } from "react";

import classes from './Picture.module.css';
import { GaleryPicture } from './PictureModel';

const Picture = ({picture}:{picture: GaleryPicture}) =>{
    const [display, setDisplay] = useState(false);
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    return(
        <li className={classes.item} onClick={() => setDisplay(!display)}>
            <Image className={classes.galeria_image} src={baseUrl+picture.imageUrl} fill={true} sizes='250' alt={picture.title} />
            <div className={`${display ? classes.fullpage : ''}`} style={{ backgroundImage:`url(${baseUrl+picture.imageUrl})`, display: display ? "block" : "none"}}></div>
        </li>
        
    );
}

export default Picture;