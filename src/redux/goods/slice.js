import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getAllAssortmentGoods,
  getCartContents,
  getCurrentGoodInformation,
} from './operations.js';

const initialState = {
  goods: {
    goodsList: [],
    selectedGood: [],
  },

  cartContents: {
    cartContents: [],
    cartGood: [],
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

      .addCase(getCartContents.fulfilled, (state, action) => {
        state.cartContents.cartContents = action.payload.data;
        state.isLoading = false;
      })

      .addMatcher(
        isAnyOf(
          getAllAssortmentGoods.pending,
          getCurrentGoodInformation.pending,
          getCartContents.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )

      .addMatcher(
        isAnyOf(
          getAllAssortmentGoods.rejected,
          getCurrentGoodInformation.rejected,
          getCartContents.rejected
        ),
        (state) => {
          state.isLoading = false;
        }
      );
  },
});

export default slice.reducer;
