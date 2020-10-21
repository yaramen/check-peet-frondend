import React from 'react';
import {Category} from "../../../types";
import {Link} from 'react-router-dom';
import {Section} from './CategoryCard.style';
import {H2} from '../../../styles';

export interface CategoryCardProps {
    category: Category
}

export const CategoryCard = ({category}: CategoryCardProps) => {
    const {name, image, code} = category;
    return (
        <Section>
            <Link to={`/category/${code}/`} className="link link--block">
                    <H2>{name}</H2>
                    <img src={image} alt={name}/>
            </Link>
        </Section>
    )
};