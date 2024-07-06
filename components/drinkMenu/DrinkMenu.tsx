import { useEffect, useState } from "react";
import Loader from "../ui/Loader";
import classes from './DrinkMenu.module.css';
import { getDrinksByType } from "@/helpers/api-utils";
import Drink from "../products/drink/Drink";

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
            className={`category-button ${selectedCategory === drinkType.typeName ? 'active' : ''}`}
            onClick={() => setSelectedCategory(drinkType.typeName)
            }
          >
            {drinkType.nameOfProduct}
          </button>
        ))}
      </div>

    {items?<Drink drinks={items}/>: <Loader/> }
      <style jsx>{`
        .category-button {
          margin: 0 10px;
          padding: 10px 20px;
          border: none;
          background: none;
          cursor: pointer;
          font-size: 16px;
          position: relative;
          color: #fff;
        }
        .category-button.active::after {
          content: '';
          display: block;
          width: 100%;
          height: 2px;
          background: yellow;
          position: absolute;
          bottom: -5px;
          left: 0;
        }
        .menu-items {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .menu-item {
          margin: 10px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background: #f9f9f9;
        }
      `}</style>
    </div>
  );
}

export default DrinkMenu;

