import classes from './DrinkCard.module.css';

function DrinkCard({product}:{product: Drink}){
    
    return(
        <div className={classes.container}>
            <div className={classes.text}>
                <h3>
                    {product.name}
                </h3>
                <div className={classes.item_to_right}>
                    <h3>{product.price} Ft</h3>
                </div>
            </div>
        </div>
    );
}

export default DrinkCard;