import { GridBlock } from '../Models/Grid/GridBlock';
import Carousel from '../carousel/Carousel';
import { CarouselModel } from '../carousel/CarouselModel';
import TextContainer from '../layout/TextContainer';
import { TextContainerObj } from '../layout/TextModels';
import TextOneColumnContainer from '../layout/TextOneColumnContainer';
import TextTwoColumnContainer from '../layout/TextTwoColumnContainer';
import classes from './Home.module.css';

const mockText: TextContainerObj =
{
    title: 'Heti menü ajánlatunk',
    description: 'Örömmel tájékoztatjuk kedves Vendégeinket, hogy Vendéglátó Egységünkben elérhető a heti menü! Kínálatunkat rendszeresen frissítjük és minden héten változatos étellel próbálunk szolgálni.',
    footNote: null

}

function Home({carouselModels, gridBlocks}:{carouselModels: CarouselModel[], gridBlocks: GridBlock[]}){
    return(
        <div>
            {carouselModels && <Carousel key={1} carouselModels={carouselModels}></Carousel>}
            {gridBlocks && gridBlocks.map((item, i) => item.oneColumnText ? <TextOneColumnContainer key={i} text={item.oneColumnText}/> : item.leftText && item.rightText && <TextTwoColumnContainer key={i} leftColumn={item.leftText} rightColumn={item.rightText}/>)}

        </div>
    );
}

export default Home;