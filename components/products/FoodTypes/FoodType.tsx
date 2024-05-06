import Link from 'next/link';
import Image from 'next/image'
import classes from './FoodType.module.css';

function FoodType({foodType}:{foodType: ProductType}){
    
    return(

        <Link href={`menu/${foodType.typeName}`} className={classes.content}>
            <Image className={classes.image} src={'https://localhost:44370'+foodType.typeImageUrl} width={250} height={200} alt='Image alt'/>
            <h3 className={classes.title}>{foodType.nameOfProduct}</h3>
        </Link>

    )
}

export default FoodType;