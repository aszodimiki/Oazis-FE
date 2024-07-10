import { useEffect, useState } from "react";
import Loader from "../ui/Loader";
import classes from './DrinkMenu.module.css';
import { getDrinksByType } from "@/helpers/api-utils";
import Drink from "../products/drink/Drink";
import { Nunito } from '@next/font/google';

const nunito = Nunito({
  weight: ['400', '700'],
  subsets: ['latin'],
});

function DrinkMenu({drinkTypes, drinks, initialCategory}:{drinkTypes: DrinkType[], drinks: Drink[], initialCategory: string}){
  const initCat= initialCategory
    const [selectedCategory, setSelectedCategory] = useState<string>(initCat);
    const [items, setItems] = useState<Drink[]>(drinks);
    const [loading, setLoading] = useState(false);
    
    
    useEffect(() => {
      const fetchItems =  async (selectedCategory: string) => {
        setLoading(true);
        try {
          const data = await getDrinksByType(selectedCategory);
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
        {drinkTypes?.map((drinkType) => (
          <button
            key={drinkType.typeName}
            className={`${classes.category_button} ${nunito.className} ${selectedCategory === drinkType.typeName ? classes.active : ''}`}
            onClick={() => setSelectedCategory(drinkType.typeName)
            }
          >
            {drinkType.nameOfProduct}
          </button>
        ))}
      </div>

    {items?<Drink drinks={items}/>: <Loader/> }
    </div>
  );
}

export default DrinkMenu;

