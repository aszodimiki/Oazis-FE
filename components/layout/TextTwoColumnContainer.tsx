import {decodeHtml} from '@/helpers/HtmlDecoder';
import classes from './TextTwoColumnContainer.module.css';

function TextTwoColumnContainer({leftColumn, rightColumn}:{leftColumn: string, rightColumn: string}){
    return(
        <div className={classes.container}>
            <div>
                <div className={classes.decoded} dangerouslySetInnerHTML={{ __html: decodeHtml(leftColumn) }} />
            </div>
            <div>
                <div className={classes.decoded} dangerouslySetInnerHTML={{ __html: decodeHtml(rightColumn) }} />
            </div>
        </div>
    );
}

export default TextTwoColumnContainer;