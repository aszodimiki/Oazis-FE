import Link from 'next/link';
import Image from 'next/image'
import classes from './FoodType.module.css';

function FoodType({foodType}:{foodType: ProductType}){
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    return(

        <Link href={`menu/${foodType.typeName}`} className={classes.content}>
            <Image className={classes.image} src={baseUrl+foodType.typeImageUrl} width={250} height={200} alt='Food'/>
            <h3 className={classes.title}>{foodType.nameOfProduct}</h3>
        </Link>

    )
}

export default FoodType;