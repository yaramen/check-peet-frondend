import {useState} from 'react';
import {Product} from "../../types";

export const useCart = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const isSet = (product: Product): boolean => {
        const findProduct = products.find(currProduct => currProduct.id === product.id);
        return typeof findProduct !== "undefined";
    };

    const add = (product: Product) => {
        if (!isSet(product)) {
            setProducts([...products, {...product, amount: 100}]);
        }
    }

    const remove = (productId: number | string) => {
        setProducts(products.filter(product => product.id !== productId))
    }

    const updateAmount = (product: Product, amount: number) => {
        setProducts(products.map(currProduct => {
            if (currProduct.id === product.id) {
                return {
                    ...product,
                    amount
                }
            }
            return currProduct
        }));
    }

    const getSums = () => {
        return products.reduce((ac, curr) => {
            if (curr.amount) {
                ac.calories = Math.round(ac.calories + curr.calories * (curr?.amount / 100));
                ac.protein = Math.round(ac.protein + curr.protein * (curr?.amount / 100));
                ac.fat = Math.round(ac.fat + curr.fat * (curr?.amount / 100));
                ac.carbohydrate += Math.round(ac.carbohydrate + curr.carbohydrate * (curr?.amount / 100));
            }
            return ac;
        }, {
            calories: 0,
            protein: 0,
            fat: 0,
            carbohydrate: 0
        })
    };

    return {
        products,
        isSet,
        add,
        remove,
        updateAmount,
        getSums
    };
};