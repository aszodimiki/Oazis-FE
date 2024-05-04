import decodeHtml from '@/helpers/HtmlDecoder';
import Weekly_Card from './Weekly_Card';
import classes from './Weekly_Menu.module.css';
import { DailyMenu, WeeklyMenu } from './WeekylMenu';
import { GridBlock } from '../Models/Grid/GridBlock';
import TextOneColumnContainer from '../layout/TextOneColumnContainer';
import TextTwoColumnContainer from '../layout/TextTwoColumnContainer';
import WeeklyGroup from './Weekly_Group';

function Weekly({weeklyMenu, gridBlocks}:{weeklyMenu: WeeklyMenu, gridBlocks: GridBlock[]}){
    return(
        
        <div className={classes.container}>
            {weeklyMenu?.weeklyGroups?.map((groupItem) => <WeeklyGroup dailyMenus={groupItem.dailyMenus} />) }
            {gridBlocks.map((item, i) => item.oneColumnText ? <TextOneColumnContainer key={i} text={item.oneColumnText}/> : item.leftText && item.rightText && <TextTwoColumnContainer key={i} leftColumn={item.leftText} rightColumn={item.rightText}/>)}
        </div>

    );
}

export default Weekly;
