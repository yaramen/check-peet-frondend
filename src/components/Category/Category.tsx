import React from 'react';
import {ProductCard} from './components/ProductCard';
import {products} from "../../data/products";
import {CardList} from '../../styles';

export const Category = () => (
    <CardList>
        {products.map(product => (
            <ProductCard product={product} withButtons={true}/>
        ))}
    </CardList>
);