import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: false
}

export const menuSlice = createSlice({
    name: 'headerMenu',
    initialState,
    reducers: {
        openMenu: (state) => {
            state.value = true
        },
        closeMenu: (state) => {
            state.value = false
        }
    }
})

export const { openMenu, closeMenu } = menuSlice.actions

export default menuSlice.reducer