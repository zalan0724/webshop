import { createSlice } from '@reduxjs/toolkit';
import product from '../../pages/products/details/[product]';

export const comparedItemsSlice = createSlice({
    name: 'comparedItems',
    initialState: {
        products: [],
    },
    reducers: {
        addItem: (state, action) => {
            if (product.length < 3) state.products.push(action.payload);
            else if (product.length >= 3)
                state.products = [...state.products.slice[1], action.payload];
        },
        removeItem: (state, action) => {
            state.products.splice(action.payload, 1);
        },
    },
});

export const { addItem, removeItem } = comparedItemsSlice.actions;

export const getComparedItems = state => state.comparedItems.products;

export default comparedItemsSlice.reducer;
