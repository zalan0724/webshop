import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: false
}

export const cartMenuSlice = createSlice({
    name: 'cartMenu',
    initialState,
    reducers: {
        openCart: state => {
            state.value = true
        },
        closeCart: state => {
            state.value = false
        }
    }
})

export const { openCart, closeCart } = cartMenuSlice.actions

export default cartMenuSlice.reducer