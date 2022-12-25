import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (id, image, title, price, category) => {
    setCartProducts([{ id, image, title, price, category }]);
  };

  const value = {
    cartCount,
    setCartCount,
    cartProducts,
    setCartProducts,
    addToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
