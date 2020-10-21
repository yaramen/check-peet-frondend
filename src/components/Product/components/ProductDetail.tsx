import React from 'react';
import {Product} from "../../../types";
import {ProductCard} from "../../Category/components/ProductCard";
import {FloatLeft} from '../../../styles';

export const ProductDetail = ({product}: {product: Product}) => {
    return (
        <>
            <FloatLeft>
                <ProductCard product={product}/>
            </FloatLeft>
            {product.description && <div dangerouslySetInnerHTML={{__html: product.description}}/>}
        </>
    );
};