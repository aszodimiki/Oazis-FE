import { useEffect, useState } from "react";
import Product from "../products/product/Product";
import Loader from "../ui/Loader";
import classes from './FoodMenu.module.css';
import { getProductsByType } from "@/helpers/api-utils";

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
        {productTypes.map((productType) => (
          <button
            key={productType.typeName}
            className={`category-button ${selectedCategory === productType.typeName ? 'active' : ''}`}
            onClick={() => setSelectedCategory(productType.typeName)
            }
          >
            {productType.nameOfProduct}
          </button>
        ))}
      </div>

    {items?<Product products={items}/>: <Loader/> }
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

export default FoodMenu;

