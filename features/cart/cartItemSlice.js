import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: []
}

export const cartItemSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.concat(action.payload)
        },
        removeItem: (state, action) => {
            state.filter((item, i) => i!==action.payload.index)
        }
    }
})

export const { addItem, removeItem } = cartItemSlice.actions

export default cartItemSlice.reducer