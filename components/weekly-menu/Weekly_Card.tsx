import decodeHtml from '@/helpers/HtmlDecoder';
import classes from './Weekly_Card.module.css';
import { DailyMenu } from './WeekylMenu';

function Weekly_Card({dailyItem}:{dailyItem: DailyMenu}){
    return(
        <ul className={classes.box}>
            <div className={classes.date}>{dailyItem.day.toString()}</div>
            <div className={classes.decoded} dangerouslySetInnerHTML={{ __html: decodeHtml(dailyItem.foods) }} />
        </ul>
    );
}

export default Weekly_Card;