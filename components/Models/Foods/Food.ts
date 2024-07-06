interface BasicProduct{
    name: string,
    productName: string,
    price:number,
}

interface Product extends BasicProduct{
    ingredients: string[] | null
    secondPrice: number | null
}

interface Ingredient{
    ingredients: string
}

interface Drink extends BasicProduct{
}