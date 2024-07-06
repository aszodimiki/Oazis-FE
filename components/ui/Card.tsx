import classes from './Card.module.css';

function Card({product}:{product: Product}){    
    return(
        <div className={classes.container}>
            <div className={classes.text}>
                <h3 >
                    {product.productName}
                </h3>
                <div className={classes.item_to_right}>
                    <h3>{product.price} Ft</h3>
                </div>
            </div>
            {product.ingredients && product.ingredients.length > 0 &&
                <div className={classes.ingredients_container}>
                    {product.ingredients.map((product, i) => <div key={i} className={classes.ingredient}>{product}</div>)}
                </div>}
        </div>
    );
}

export default Card;