import Image from 'next/image'
import { useState } from "react";
import classes from './Picture.module.css';
import { GaleryPicture } from './PictureModel';
  
  interface PictureProps {
    picture: GaleryPicture;
    onClick: () => void;
  }

const Picture = ({ picture, onClick }: PictureProps) =>{
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    
    const imageLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
        return `${src}?w=${width}&q=${quality || 75}`
      }

    return(
        <li className={classes.item} onClick={onClick}>
            <Image className={classes.galeria_image} loader={imageLoader} src={baseUrl+picture?.imageUrl} fill={true} sizes='250' alt={picture.title} priority/>
        </li>
    );
}

export default Picture;