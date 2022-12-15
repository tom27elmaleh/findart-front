import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: {token: null, username: null, type: null},
};

export const artistSlice = createSlice({
 name: 'artist',
    initialState,
 reducers: {   
    login: ((state, action) => {
      state.value.token = action.payload.token;
      state.value.username = action.payload.username;
      state.value.type = action.payload.type;
    }),
    logout: ((state, action) => {
      state.value.token = null;
      state.value.username = null;
      state.value.type = null;
    }),
 },
});

export const { login, logout } = artistSlice.actions;
export default artistSlice.reducer;