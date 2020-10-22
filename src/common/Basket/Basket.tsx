import React from 'react';
import {Link} from "react-router-dom";
import cart from './cart.svg';
import {useCartContext} from "../../components/Cart/CartContext";
import styled from "styled-components";

const Count = styled.div`
  margin-right: 10px;
  color: red;
  text-decoration: none;
`

const CartContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Basket = () => {
    const {products} = useCartContext()

    return (
        <Link to='/cart' className="link link--block">
            <CartContainer>
                {products.length !== 0 && <Count>{products.length} шт</Count>}
                <img src={cart} alt="Корзина"/>
            </CartContainer>
        </Link>
    );
}
