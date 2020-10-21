import React from 'react';
import {CategoryCard} from './components/CategoryCard';
import {categories} from "../../data/categories";
import {CardList} from '../../styles';

export const Home = () => (
    <CardList>
        {categories.map(category => (
            <CategoryCard category={category} />
        ))}
    </CardList>
);