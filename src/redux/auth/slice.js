import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {},
});

export default slice.reducer;
