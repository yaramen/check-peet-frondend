import React from 'react';
import {Product} from "../../../types";
import {Link} from 'react-router-dom';
import {H2, Section} from '../../../styles';
import {TableProperties} from "./TableProperties";
import styled from "styled-components";

const Pairs = styled.div`
  display: flex;
  justify-content: space-between;
  
`

export interface ProductCardProps {
    product: Product
}

export const ProductCard = ({product}: ProductCardProps) => {
    const {name, image, code, calories, protein, fat, carbohydrate} = product;
    const tableProperties = [protein, fat, carbohydrate, calories];
    return (
        <Section>
            <Link to={`/product/${code}/`} className="link link--block">
                <H2>{name}</H2>
                <img src={image} alt={name}/>
                <TableProperties propertiesValues={tableProperties}/>
                <Pairs>
                    <button>Добавить</button>
                    <Link to={`/product/${code}/`}>Подробнее</Link>
                </Pairs>
            </Link>
        </Section>
    )
};