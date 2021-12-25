import { createSlice } from '@reduxjs/toolkit';

export const comparedItemsSlice = createSlice({
    name: 'comparedItems',
    initialState: {
        products: [],
    },
    reducers: {
        addToCompare: (state, action) => {
            if (state.products.length < 3) state.products.push(action.payload);
            else if (state.products.length >= 3)
                state.products = [...state.products.slice(1), action.payload];
        },
        removeFromCompare: (state, action) => {
            state.products.splice(action.payload, 1);
        },
    },
});

export const { addToCompare, removeFromCompare } = comparedItemsSlice.actions;

export const getComparedItems = state => state.comparedItems.products;
export const getComparedItemsLength = state =>
    state.comparedItems.products.length;

export default comparedItemsSlice.reducer;
