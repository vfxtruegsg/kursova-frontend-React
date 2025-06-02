import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getAllAssortmentGoods,
  getCurrentGoodInformation,
} from './operations.js';

const initialState = {
  goods: {
    goodsList: [],
    selectedGood: [],
  },

  cart: {},
  isLoading: false,
};

const slice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder

      .addCase(getAllAssortmentGoods.fulfilled, (state, action) => {
        state.isLoading = false;
        state.goods.goodsList = action.payload.data;
      })

      .addCase(getCurrentGoodInformation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.goods.selectedGood = action.payload.data;
      })

      .addMatcher(
        isAnyOf(
          getAllAssortmentGoods.pending,
          getCurrentGoodInformation.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )

      .addMatcher(
        isAnyOf(
          getAllAssortmentGoods.rejected,
          getCurrentGoodInformation.rejected
        ),
        (state) => {
          state.isLoading = false;
        }
      );
  },
});

export default slice.reducer;
