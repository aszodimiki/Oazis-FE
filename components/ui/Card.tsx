import classes from './Card.module.css';

function Card({food}:{food: Product}){    
    return(
        <div className={classes.container}>
            <div className={classes.text}>
                <h3 >
                    {food.productName}
                </h3>
                <div className={classes.item_to_right}>
                    <h3>{food.price} Ft</h3>
                </div>
            </div>
            {food.ingredients && food.ingredients.length > 0 &&
                <div className={classes.ingredients_container}>
                    {food.ingredients.map((item, i) => <div key={i} className={classes.ingredient}>{item}</div>)}
                </div>}
        </div>
    );
}

export default Card;