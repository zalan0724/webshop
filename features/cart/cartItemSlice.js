import { createSlice } from '@reduxjs/toolkit';

export const cartItemSlice = createSlice({
    name: 'cartItems',
    initialState: {
        products: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.products.push({ ...action.payload });
        },
        removeFromCart: (state, action) => {
            state.products.splice(action.payload, 1);
        },
        setCart: (state, action) => {
            state.products = [...action.payload];
        },
    },
});

export const { addToCart, removeFromCart, setCart } = cartItemSlice.actions;

export const getProducts = state => state.cartItems.products;
export const getCartLength = state => state.cartItems.products.length;

export default cartItemSlice.reducer;
