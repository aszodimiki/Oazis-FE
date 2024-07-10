import { GridBlock } from '../Models/Grid/GridBlock';
import Carousel from '../carousel/Carousel';
import { CarouselModel } from '../carousel/CarouselModel';
import classes from './Home.module.css';

function Home({carouselModels, gridBlocks}:{carouselModels: CarouselModel[], gridBlocks: GridBlock[]}){
    return(
        <div className={classes.content}>
            {carouselModels && <Carousel key={1} carouselModels={carouselModels}></Carousel>}
            {/* {gridBlocks && gridBlocks.map((item, i) => item.oneColumnText ? <TextOneColumnContainer key={i} text={item.oneColumnText}/> : item.leftText && item.rightText && <TextTwoColumnContainer key={i} leftColumn={item.leftText} rightColumn={item.rightText}/>)} */}
        </div>
    );
}

export default Home;