import React from 'react';
import {products} from "../../data/products";
import {ProductDetail} from "./components/ProductDetail";
import {useParams} from "react-router-dom";
import {WithData, withLoaderFetch} from "../../utils/withLoaderFetch";
import {getProduct} from "../../api/api";
import {Product as ProductType} from "../../types";

export const ProductPage = ({data}: WithData) => {
    return (
        <div>
            {data && <ProductDetail product={data as ProductType} />}
        </div>
    );
}

export const Product = () => {
    const {productId} = useParams();
    const ProductComponent = withLoaderFetch(ProductPage, getProduct, productId);
    return <ProductComponent />
}
