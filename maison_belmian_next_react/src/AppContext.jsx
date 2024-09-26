"use client"

import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) =>
{
    const [cart, setCart] = useState([]);

    //adds products to the cart
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product])
    };

    //removes products from the cart
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !==productId))
    };

    const value = {
        cart,
        addToCart,
        removeFromCart,
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>

};

