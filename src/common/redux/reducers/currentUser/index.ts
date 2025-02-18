import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userData: null,
    isLoggedIn: false
} as CurrentUser;

const currentUser = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload;
            state.isLoggedIn = action.payload == null ? false : true
        },
    },
});

export const { setUserData } = currentUser.actions;

export default currentUser.reducer;
