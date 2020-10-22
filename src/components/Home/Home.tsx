import React from 'react';
import {CategoryCard} from './components/CategoryCard';
import {CardList} from '../../styles';
import {getCategories} from "../../api/api";
import {Category} from "../../types";
import {WithData, withLoaderFetch} from "../../utils/withLoaderFetch";

export const HomePage = ({data}:WithData) => {
    return (
        <CardList>
            {data && (data as Category[]).map(category => (
                <CategoryCard category={category}/>
            ))}
        </CardList>
    )
};

export const Home = withLoaderFetch(HomePage, getCategories)

