import { configureStore } from '@reduxjs/toolkit';
import { menuSlice } from '../features/menu/menuSlice';
import { cartMenuSlice } from '../features/cart/cartMenuSlice';
import { cartItemSlice } from '../features/cart/cartItemSlice';

export const store = configureStore({
    reducer: {
        menu: menuSlice.reducer,
        cart: cartMenuSlice.reducer,
        cartItems: cartItemSlice.reducer,
    },
});