import React from 'react';
import {Category} from "../../../types";
import {Link} from 'react-router-dom';
import {H2, Section} from '../../../styles';

export interface CategoryCardProps {
    category: Category
}

export const CategoryCard = ({category}: CategoryCardProps) => {
    const {name, image, id} = category;
    return (
        <Section>
            <Link to={`/category/${id}/`} className="link link--block">
                <H2>{name}</H2>
                <img src={image} alt={name}/>
            </Link>
        </Section>
    )
};