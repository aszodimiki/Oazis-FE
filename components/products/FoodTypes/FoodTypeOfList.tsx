import FoodType from './FoodType';
import classes from './FoodTypeOfList.module.css';

function FoodTypeOfList({productTypes}:{productTypes: ProductType[]}){

    return(
        <ul className={classes.list}>
            {productTypes.map((productType,i) =>(
                <FoodType key={i} foodType={productType}/>
            ))}
        </ul>
    );
}

export default FoodTypeOfList;