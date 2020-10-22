import {FetchDataType} from '../utils/useFetch';
import {Category, Product} from '../types'

export type FetchData = Category[] | Product[] | Product | null;

export const getCategories: FetchDataType<Category[]> = () => {
    return fetch('/categories')
        .then(response => response.json())
        .catch(error => error);
};

export const getProducts: FetchDataType<Product[]> = (id?: string | number) => {
    return fetch(`/products/${id}`)
        .then(response => response.json())
        .catch(error => error);
};

export const getProduct: FetchDataType<Product> = (id?: string | number) => {
    return fetch(`/product/${id}`)
        .then(response => response.json())
        .catch(error => error);
};

