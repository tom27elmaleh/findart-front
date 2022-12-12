import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: {token: null, username: null, type: null},
};

export const artistSlice = createSlice({
 name: 'artist',
    initialState,
 reducers: {
    login: (() => {}),
    logout: (() => {}),
 },
});

export const { login, logout } = artistSlice.actions;
export default artistSlice.reducer;