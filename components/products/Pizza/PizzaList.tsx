import Card from '@/components/ui/Card';
import classes from './PizzaList.module.css';

function PizzaList({products}:{products: Product[]}) {

    return (
        <div className={classes.gridContainer}>
          <div style={{ fontWeight: 'bold' }}>Pizza</div>
          <div style={{ fontWeight: 'bold', textAlign: 'center' }}>26cm</div>
          <div style={{ fontWeight: 'bold', textAlign: 'center' }}>32cm</div>
          {products.map((pizza, index) => (
            <>
              <div>
                <div>{pizza.productName}</div>
                {pizza.ingredients && pizza.ingredients.length > 0 &&
                <div className={classes.ingredients_container}>
                    {pizza.ingredients.map((item, i) => <div key={i} className={classes.ingredient}>{item}</div>)}
                </div>}
              </div>
              <div className={classes.price}>{pizza.price} Ft</div>
              <div className={classes.price}>{pizza.secondPrice} Ft</div>
            </>
          ))}
        </div>
      );
}

export default PizzaList;