"use client";

import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Vérifie la présence d'un panier dans le local storage et l'utilise s'il existe
  const [cart, setCart] = useState(checkLocalStorageSavedCart);

  // Sauvegarde le panier dans le local storage lorsqu'il est modifié
  useEffect(() => {
    localStorage.setItem("userCart", JSON.stringify(cart));
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
    if(typeof window !== "undefined"){
      savedCart = window.localStorage.getItem("userCart");

    }

  }catch(e){
    console.log(e)
  }
  return savedCart ? JSON.parse(savedCart) : [];
};
