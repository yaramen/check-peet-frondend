import React from 'react';
import {Logo} from "../Logo";
import {Basket} from "../Basket";
import {HeaderContainer} from './Header.style';

export const Header = () => (
    <HeaderContainer>
        <Logo />
        <Basket />
    </HeaderContainer>
);