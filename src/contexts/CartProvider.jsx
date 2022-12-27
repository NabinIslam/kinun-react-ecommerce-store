import React, { createContext, useReducer, useState } from 'react';
import reducer from '../reducer/CartReducer';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const initialState = {
    cart: [],
    totalItem: '',
    totalAmount: '',
    shippingFee: 50000,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (
    id,
    image,
    title,
    price,
    category,
    description,
    productDetail
  ) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id,
        image,
        title,
        price,
        category,
        description,
        productDetail,
      },
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartCount,
        setCartCount,
        ...state,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
