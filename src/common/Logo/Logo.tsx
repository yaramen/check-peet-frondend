import React from 'react';
import logo from './logo.svg';
import {Link} from 'react-router-dom'

export const Logo = () => (
    <Link to='/'>
        <img src={logo} width={200} alt="CheckPeet" />
    </Link>
);