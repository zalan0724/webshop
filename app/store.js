import { configureStore } from '@reduxjs/toolkit';
import cartItemsSliceReducer from '../features/cart/cartItemsSlice';
import comparedItemsSliceReducer from '../features/compare/comparedItemsSlice';
import popupSliceReducer from '../features/popup/popupSlice';

export const store = configureStore({
    reducer: {
        cart: cartItemsSliceReducer,
        comparedItems: comparedItemsSliceReducer,
        popupMessage: popupSliceReducer,
    },
});
