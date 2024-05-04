const BASE_API_URL : string = 'https://localhost:44302/api/';

export default class ENDPOINTS{
    static GET_ALL_PIZZA:string = BASE_API_URL + 'pizza';
    static GET_ALL_HAMBURGER:string = BASE_API_URL + 'hamburger';
    static GET_ALL_FRIED:string = BASE_API_URL + 'fried';
    static GET_ALL_PRODUCTTYPES:string = BASE_API_URL + 'products/productTypes';

    static GET_HOME_PAGE:string = BASE_API_URL + 'detail/home-page';
    static GET_LINKS:string = BASE_API_URL + 'detail/links';
};
