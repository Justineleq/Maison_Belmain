"use client";

import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(checkLocalStorageSavedCart);

// Save in localstorage
  useEffect(() => {
    if (typeof window !== 'undefined'){
      localStorage.setItem("userCart", JSON.stringify(cart));
  
    }
  }, [cart]);
    

  // Adds products to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      return updatedCart;
    });
  };

  // Removes products from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Clears the entire cart
  const clearCart = () => {
    setCart([]);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const checkLocalStorageSavedCart = () => {
  let savedCart 
try{
  if(typeof window !== undefined)
  savedCart  = localStorage.getItem("userCart") ?? ""

}catch{
  console.log('error')
}

  return savedCart ? JSON.parse(savedCart) : [];
};
