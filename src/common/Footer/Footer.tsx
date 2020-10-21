import React from 'react';
import {FooterContainer} from './Footer.style';

export const Footer = () => (
    <FooterContainer>
        © {(new Date()).getFullYear()}. Check Peet
    </FooterContainer>
);