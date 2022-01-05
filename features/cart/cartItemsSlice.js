import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCart = createAsyncThunk(
    'cart/fetchCart',
    async ({ userId }) => {
        return axios.get(`/api/user/${userId}`).then(res => res.data.cart);
    }
);

export const addAsyncCart = createAsyncThunk(
    'cart/addAsyncCart',
    async ({ userId, product }, thunkAPI) => {
        const { cart } = thunkAPI.getState();
        return axios
            .put(`/api/user/${userId}`, {
                cart: [...cart.products, product],
            })
            .then(res => res.data.cart);
    }
);

export const removeAsyncCart = createAsyncThunk(
    'cart/removeAsyncCart',
    async ({ userId, productIndex }, thunkAPI) => {
        const { cart } = thunkAPI.getState();
        const cartProducts = [...cart.products];
        cartProducts.splice(productIndex, 1);
        return axios
            .post(`/api/user/${userId}`, { cart: [...cartProducts] })
            .then(res => res.data.cart);
    }
);

const cartItemsSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.products.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.products.splice(action.payload, 1);
        },
        setCart: (state, action) => {
            state.products = [...action.payload];
        },
    },
    extraReducers: {
        [fetchCart.fulfilled]: (state, { payload }) => {
            state.products = [...payload];
        },
        [addAsyncCart.fulfilled]: (state, { payload }) => {
            state.products = [...payload];
        },
        [removeAsyncCart.fulfilled]: (state, { payload }) => {
            state.products = [...payload];
        },
    },
});

export const { addToCart, removeFromCart } = cartItemsSlice.actions;

export const getCart = state => state.cart.products;
export const getCartLength = state => state.cart.products.length;

export default cartItemsSlice.reducer;
