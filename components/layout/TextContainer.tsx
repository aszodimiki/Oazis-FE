import classes from './TextContainer.module.css'
import { TextContainerObj } from './TextModels';

export default function TextContainer({text}:{text: TextContainerObj}){
    return(
        <div className={classes.main}>
            <div className={classes.title}>{text.title}</div>
            <div className={classes.description}>{text.description}</div>
            <div className={classes.footNote}>{text.footNote}</div>
        </div>
    );
}