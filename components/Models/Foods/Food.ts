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

interface Food{
    name: string,
    productName: string,
    price:number,
    ingredients: string[] | null
}