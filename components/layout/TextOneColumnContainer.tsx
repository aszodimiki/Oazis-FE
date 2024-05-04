import decodeHtml from '@/helpers/HtmlDecoder';
import classes from './TextOneColumnContainer.module.css';

function TextOneColumnContainer({text}:{text: string}){
    return(
        <div className={classes.container}>
            <div className={classes.decoded} dangerouslySetInnerHTML={{ __html: decodeHtml(text) }} />
        </div>
    );
}

export default TextOneColumnContainer;