import React from 'react';
import {products} from "../../data/products";
import {ProductDetail} from "./components/ProductDetail";

export const Product = () => {
    return (
        <div>
            <ProductDetail product={products[0]} />
        </div>
    );
}