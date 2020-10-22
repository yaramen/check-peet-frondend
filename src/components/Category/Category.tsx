import React from 'react';
import {ProductCard} from './components/ProductCard';
import {CardList} from '../../styles';
import {getProducts} from "../../api/api";
import {WithData, withLoaderFetch} from "../../utils/withLoaderFetch";
import {Product} from "../../types";
import {useParams} from 'react-router-dom';

export const CategoryPage = ({data}: WithData ) => {
    return (
        <CardList>
            {data && (data as Product[]).map(product => (
                <ProductCard product={product} withButtons={true}/>
            ))}
        </CardList>
    );
}

export const Category = () => {
    const {categoryId} = useParams();
    const CategoryCom = withLoaderFetch(CategoryPage, getProducts, categoryId);
    return <CategoryCom />
}
