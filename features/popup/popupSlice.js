import { createSlice } from '@reduxjs/toolkit';

export const popupSlice = createSlice({
    name: 'popupMessage',
    initialState: {
        message: '',
        messageCount: 0,
    },
    reducers: {
        addMessage: (state, action) => {
            state.message = '' + action.payload;
            state.messageCount = state.messageCount + 1;
        },
    },
});

export const { addMessage } = popupSlice.actions;

export const getPopupMessage = state => state.popupMessage;

export default popupSlice.reducer;
