import classes from './Galeria.module.css';
import Picture from './Picture';
import { GaleryPicture } from './PictureModel';

function Galeria({pictures}:{pictures: GaleryPicture[]}){
    return(
        <ul className={classes.list}>
            {pictures.map((picture, i) => <Picture key={i} picture={picture}/>)}
        </ul>
        
    );
}

export default Galeria;