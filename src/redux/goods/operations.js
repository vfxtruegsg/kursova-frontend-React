import { baseURL } from '../../utils/axiosDefaultSettings.js';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  showToastErrorMessage,
  showToastSuccessMessage,
} from '../../utils/toastMessages.js';

export const getAllAssortmentGoods = createAsyncThunk(
  'store/getAllAssortmentGoods',
  async (_, thunkAPI) => {
    try {
      const { data } = await baseURL.get('/goods');

      return data;
    } catch (error) {
      showToastErrorMessage('Something went wrong');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCurrentGoodInformation = createAsyncThunk(
  'store/getCurrentGoodInformation',
  async (id, thunkAPI) => {
    try {
      const { data } = await baseURL.get(`/goods/${id}`);

      return data;
    } catch (error) {
      showToastErrorMessage('Something went wrong');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
