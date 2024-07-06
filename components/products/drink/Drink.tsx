import classes from './Drink.module.css';
import DrinkCard from '@/components/ui/DrinkCard';

function Drink({drinks}:{drinks: Drink[]}) {

    return(
        <ul className={classes.list}>
            {drinks?.map((drink, i) => <DrinkCard key={i} product={drink}/>)}
        </ul>
    )
}

export default Drink;