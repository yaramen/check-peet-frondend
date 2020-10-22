import React from 'react';
import {useCart} from "./useCart";

type CartContextValue = ReturnType<typeof useCart>;

export const CartContext = React.createContext({} as CartContextValue);

const Provider = CartContext.Provider;

export const CartProvider = ({children}:{children: React.ReactNode}) => {
    const value = useCart();

    return (
        <Provider value={value}>
            {children}
        </Provider>
    );
}

export const useCartContext = () => React.useContext(CartContext);