import { configureStore } from '@reduxjs/toolkit';
import { cartItemSlice } from '../features/cart/cartItemSlice';
import { comparedItemsSlice } from '../features/compare/comparedItemsSlice';

export const store = configureStore({
    reducer: {
        cartItems: cartItemSlice.reducer,
        comparedItems: comparedItemsSlice.reducer,
    },
});
