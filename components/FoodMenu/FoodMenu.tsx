import { useEffect, useState } from "react";
import Product from "../products/product/Product";
import Loader from "../ui/Loader";
import classes from './FoodMenu.module.css';
import { getProductsByType } from "@/helpers/api-utils";
import PizzaList from "../products/Pizza/PizzaList";
import { Nunito } from '@next/font/google';

const nunito = Nunito({
  weight: ['400', '700'],
  subsets: ['latin'],
});

function FoodMenu({productTypes, products, initialCategory}:{productTypes: ProductType[], products: Product[], initialCategory: string}){
  const initCat= initialCategory
    const [selectedCategory, setSelectedCategory] = useState<string>(initCat);
    const [items, setItems] = useState<Product[]>(products);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
      const fetchItems =  async (selectedCategory: string) => {
        setLoading(true);
        try {
          const data = await getProductsByType(selectedCategory);
          if(data != null){
            setItems(data);
          }
          
        } catch (error) {
          console.error('Error fetching items:', error);
        } finally {
          setLoading(false);
        }
      };
        fetchItems(selectedCategory);
    }, [selectedCategory]);
    
  return (
    <div className={classes.food_container}>
      <div className={classes.menu_categories}>
        {productTypes?.map((productType) => (
          <button
            key={productType.typeName}
            className={`${classes.category_button} ${nunito.className} ${selectedCategory === productType.typeName ? classes.active : ''}`}
            onClick={() => setSelectedCategory(productType.typeName)
            }
          >
            {productType.nameOfProduct}
          </button>
        ))}
      </div>

    {items ? selectedCategory =='pizzak'? <PizzaList key={items.length} products={items}></PizzaList>: <Product key={items.length} products={items}/>: <Loader/> }
    </div>
  );
}

export default FoodMenu;

