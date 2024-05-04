import Card from '@/components/ui/Card';
import classes from './Product.module.css';

function Product({products}:{products: Product[]}) {

    return(
        <ul className={classes.list}>
            {products.map((product, i) => <Card key={i} food={product}/>)}
        </ul>
    )
}

export default Product;