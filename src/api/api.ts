import {FetchDataType} from '../utils/useFetch';
import {Category, Product} from '../types'

export type FetchData = Category[] | Product[] | Product | null;

export const getCategories: FetchDataType<Category[]> = () => {
    return fetch('/categories')
        .then(response => response.json())
        .catch(error => error);
};

export const getProducts = (categoryId: string | number) => {
    return fetch(`/products/${categoryId}`)
        .then(response => response.json())
        .catch(error => error);
};

export const getProduct = (productId: string | number) => {
    return fetch(`/product/${productId}`)
        .then(response => response.json())
        .catch(error => error);
};

