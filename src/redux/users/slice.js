import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getAllUsersThunk } from './operations.js';

const initialState = {
  usersList: [],
  isLoading: false,
};

const slice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsersThunk.fulfilled, (state, action) => {
        state.usersList = action.payload.data;
        state.isLoading = false;
      })

      .addMatcher(isAnyOf(getAllUsersThunk.pending), (state) => {
        state.isLoading = true;
      })

      .addMatcher(isAnyOf(getAllUsersThunk.rejected), (state) => {
        state.isLoading = false;
      });
  },
});

export default slice.reducer;
