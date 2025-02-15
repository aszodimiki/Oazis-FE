import { useState } from 'react';
import classes from './Galeria.module.css';
import Picture from './Picture';
import { GaleryPicture } from './PictureModel';
import Image from 'next/image';


function Galeria({pictures}:{pictures: GaleryPicture[]}){
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const [selectedPicture, setSelectedPicture] = useState<string | null>(null);
    const [selectedPictureTitle, setSelectedPictureTitle] = useState<string>('Oazis Vendéglő és Pizzéria');

    const handlePictureClick = (imageUrl: string, title: string) => {
        const cleanUrl = imageUrl.replace(/\.jpg.+/, '.jpg');
        setSelectedPictureTitle(title ?? 'Oazis Vendéglő és Pizzéria');
        setSelectedPicture(baseUrl+cleanUrl);
      };
    
      const handleCloseFullscreen = () => {
        setSelectedPicture(null);
      };

      const imageLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
        return `${src}?w=${width}&q=${quality || 75}`
      }
    
    return(
        <div className={classes.gallery}>
        {selectedPicture ? (
          <div className={classes.fullscreen} onClick={handleCloseFullscreen}>
            <Image
            className={classes.fullscreen_image}
            loader={imageLoader}
              src={selectedPicture}
              alt={selectedPictureTitle}
              fill
              priority
            />
          </div>
        ) : (
          pictures.map((picture, index) => (
            <Picture
              key={index}
              picture={picture}
              onClick={() => handlePictureClick(picture.imageUrl, picture.title)}
            />
          ))
        )}
      </div>
        
    );
}

export default Galeria;