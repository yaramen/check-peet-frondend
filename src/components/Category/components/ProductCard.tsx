import React from 'react';
import {Product} from "../../../types";
import {Link} from 'react-router-dom';
import {H2, Section} from '../../../styles';
import {TableProperties} from "./TableProperties";
import styled from "styled-components";
import {useCartContext} from "../../Cart/CartContext";

const Pairs = styled.div`
  position: relative;
  z-index: 1;
  
  display: flex;
  justify-content: space-between;
`

export interface ProductCardProps {
    product: Product,
    withButtons?: boolean
}

export const ProductCard = ({product, withButtons}: ProductCardProps) => {
    const {add, isSet} = useCartContext();
    const {name, image, id, calories, protein, fat, carbohydrate} = product;
    const tableProperties = [protein, fat, carbohydrate, calories];

    const buttons = withButtons
        ? <Pairs>
            <button onClick={(e) => {e.preventDefault(); add(product); }} disabled={isSet(product)}>Добавить</button>
            <Link to={`/product/${id}/`}>Подробнее</Link>
          </Pairs>
        : null;

    return (
        <Section>
            <Link to={`/product/${id}/`} className="link link--block">
                <H2>{name}</H2>
                <img src={image} alt={name}/>
                <TableProperties propertiesValues={tableProperties}/>
                {buttons}
            </Link>
        </Section>
    )
};

ProductCard.defaultProps = {
    withButtons: false
}