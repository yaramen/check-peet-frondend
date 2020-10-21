import React from 'react';
import { Link } from "react-router-dom";
import cart from './cart.svg';

export const Basket = () => (
    <Link to='/cart'>
        <img src={cart} alt="Корзина" />
    </Link>
);