import Image from 'next/image';
import classes from './Carousel.module.css';
import { useState, useEffect, useRef } from 'react';
import { CarouselModel } from './CarouselModel';
import { decodeHtml } from '@/helpers/HtmlDecoder';

export default function Carousel({carouselModels}:{carouselModels: CarouselModel[]}){
    const [index, setIndex] = useState<number>(0);
    const [isScrollable, setIsScrollable] = useState(false);
    const [isAtBottom, setIsAtBottom] = useState(false);
    const decodedRef = useRef(null);

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

    const checkScrollable = () => {
        const element = decodedRef.current as unknown as HTMLElement;     
        if (element) {
            setIsScrollable(element.scrollHeight > element.clientHeight);
        }
      };
    
      useEffect(() => {
        checkScrollable();
        window.addEventListener('resize', checkScrollable);
        return () => {
          window.removeEventListener('resize', checkScrollable);
        };
      }, []);

      useEffect(() => {
        const checkScrollable = () => {
            const element = decodedRef.current as unknown as HTMLElement;
            if (decodedRef.current) {
                setIsScrollable(element.scrollHeight > element.clientHeight);
            }
        };

        checkScrollable();

        const observer = new MutationObserver(checkScrollable);
        if (decodedRef.current) {
            
            observer.observe(decodedRef.current, { childList: true, subtree: true });
        }

        window.addEventListener('resize', checkScrollable);
        return () => {
          observer.disconnect();
          window.removeEventListener('resize', checkScrollable);
        };
      }, []);

    return(
        <div className={classes.carousel}>
            <div className={classes.slide}>
                <button className={`${classes.prev} ${classes.button}`} onClick={() => setIndex(count => loop(count-1))}></button>
                <button className={`${classes.next} ${classes.button}`} onClick={() => setIndex(count => loop(count+1))}></button>
                <div className={`${classes.text}`}>
                    <div className={`${classes.decoded}`} ref={decodedRef} dangerouslySetInnerHTML={{ __html: decodeHtml(carousels[index].text) }} />
                    {isScrollable && <div className={classes.scrollIndicator}>&#x25BC;</div>}
                </div>
            </div>
        </div>
    );
}