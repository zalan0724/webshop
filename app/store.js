import { configureStore } from '@reduxjs/toolkit';
import { cartItemSlice } from '../features/cart/cartItemSlice';
import { comparedItemsSlice } from '../features/compare/comparedItemsSlice';
import { popupSlice } from '../features/popup/popupSlice';

export const store = configureStore({
    reducer: {
        cartItems: cartItemSlice.reducer,
        comparedItems: comparedItemsSlice.reducer,
        popupMessage: popupSlice.reducer,
    },
});
