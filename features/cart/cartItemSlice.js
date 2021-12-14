import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};

export const cartItemSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.value.push(action.payload);
        },
        removeItem: (state, action) => {
            state.value.splice(action.payload, 1);
        },
    },
});

export const { addItem, removeItem } = cartItemSlice.actions;

export default cartItemSlice.reducer;
