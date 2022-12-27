const CartReducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    let { id, image, title, price, category, productDetail } = action.payload;

    let cartProduct;

    cartProduct = {
      id,
      image,
      title,
      price,
      category,
    };

    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }

  return state;
};

export default CartReducer;
