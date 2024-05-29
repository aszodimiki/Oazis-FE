import classes from './Card.module.css';

function Card({food}:{food: Product}){    
    return(
        <div className={classes.container}>
            <div className={classes.pizza_size_container}>
                <h3>32cm</h3>
                <h3>26cm</h3>
            </div>
            
            <div className={classes.text}>
                <h3 >
                    {food.productName}
                </h3>
                <div className={classes.item_to_right}>
                    <h3>{food.price} Ft</h3>
                    {food.secondPrice && food.secondPrice !== 0 && <h3>
                    { food.secondPrice} Ft
                </h3>}
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