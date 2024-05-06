import Image from 'next/image';
import classes from './Carousel.module.css';
import { useState, useEffect } from 'react';
import { CarouselModel } from './CarouselModel';
import decodeHtml from '@/helpers/HtmlDecoder';

export default function Carousel({carouselModels}:{carouselModels: CarouselModel[]}){
    const [index, setIndex] = useState<number>(0);

    const images:string[] = ["/Carousel_background.svg", "/foods.jpeg"];
    const carousels = carouselModels;
    function loop(count:number){
        if(count == carouselModels.length){
            return count = 0;
        }
        if(count<0){
            return count = carouselModels.length-1;
        }
        return count;
    }

    useEffect(()=> {
        const invetval = setInterval(
            ()=> setIndex(count => loop(count+1))
            ,5000);
        return ()=> clearInterval(invetval)
    })

    return(
        <div className={classes.main}>
            <div className={classes.image_container}>
                <button className={`${classes.prev} ${classes.button}`} onClick={() => setIndex(count => loop(count-1))}>&#8678;</button>
                <button className={`${classes.next} ${classes.button}`} onClick={() => setIndex(count => loop(count+1))}>&#8680;</button>
                    <Image className={classes.image} src={'https://localhost:44370'+carousels[index].backgroundPath} fill={true} alt='Carousel Background'></Image>
            </div>
            <div className={`${classes.text_container}`}>
                    <div className={`${classes.decoded} ${classes.text}`} dangerouslySetInnerHTML={{ __html: decodeHtml(carousels[index].text) }} />
            </div>
        </div>
    );
}