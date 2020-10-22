import React from 'react';
import {CategoryCard} from './components/CategoryCard';
import {CardList} from '../../styles';
import {useFetch} from "../../utils/useFetch";
import {getCategories} from "../../api/api";
import {Loader} from "../../common/Loader";
import {Category} from "../../types";

export const Home = () => {
    const {isLoading, error, data} = useFetch(getCategories);

    if(isLoading) {
        return <Loader />
    }

    if(error) {
        return <div>Error</div>
    }

    return (
        <CardList>
            {data && (data as Category[]).map(category => (
                <CategoryCard category={category}/>
            ))}
        </CardList>
    )
};