import {useState} from 'react';
import {Product} from "../../types";

export const useCart = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const isSet = (product: Product): boolean => {
        const findProduct = products.find(currProduct => currProduct.id === product.id);
        return typeof findProduct !== "undefined";
    };

    const add = (product: Product) => {
        if(!isSet(product)) {
            setProducts([...products, {...product, amount: 100}]);
        }
    }

    const remove = (productId: number|string) => {
        setProducts(products.filter(product => product.id !== productId))
    }

    return {
        products,
        isSet,
        add,
        remove,
    };
};