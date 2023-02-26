import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import cartSlice from '../features/cart/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
});

export default store;
