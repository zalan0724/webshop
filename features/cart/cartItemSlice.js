import { createSlice } from '@reduxjs/toolkit';

export const cartItemSlice = createSlice({
    name: 'cartItems',
    initialState: {
        products: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.products.push(action.payload);
        },
        removeItem: (state, action) => {
            state.products.splice(action.payload, 1);
        },
    },
});

export const { addItem, removeItem } = cartItemSlice.actions;

export const getProducts = state => state.cartItems.products;
export const getCartLength = state => state.cartItems.products.length;

export default cartItemSlice.reducer;
