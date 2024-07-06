export function isDrink(product: BasicProduct): product is Drink {
    return (product as Drink) !== undefined;
  }
  
  export function isProduct(product: BasicProduct): product is Product {
    return (product as Product) !== undefined;
  }