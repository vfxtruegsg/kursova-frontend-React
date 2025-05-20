import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  deleteUserThunk,
  getAllAssortmentGoods,
  getAllUsersThunk,
} from './operations.js';

const initialState = {
  user: {
    usersList: [],
  },

  goods: {
    goodsList: [],
  },

  isLoading: false,
};

const slice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsersThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.usersList = action.payload.data;
      })

      .addCase(deleteUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.usersList = state.user.usersList.filter(
          (item) => item.id !== action.payload.data.id
        );
      })

      .addCase(getAllAssortmentGoods.fulfilled, (state, action) => {
        state.isLoading = false;
        state.goods.goodsList = action.payload.data;
      })

      .addMatcher(
        isAnyOf(
          getAllUsersThunk.pending,
          deleteUserThunk.pending,
          getAllAssortmentGoods.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )

      .addMatcher(
        isAnyOf(
          getAllUsersThunk.rejected,
          deleteUserThunk.rejected,
          getAllAssortmentGoods.rejected
        ),
        (state) => {
          state.isLoading = false;
        }
      );
  },
});

export default slice.reducer;
