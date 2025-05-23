import { baseURL } from '../../utils/axiosDefaultSettings.js';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  showToastErrorMessage,
  showToastSuccessMessage,
} from '../../utils/toastMessages.js';

export const getAllUsersThunk = createAsyncThunk(
  'store/getAllUsers',
  async (_, thunkAPI) => {
    try {
      const { data } = await baseURL.get('/users');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteUserThunk = createAsyncThunk(
  'store/deleteUser',
  async (userId, thunkAPI) => {
    try {
      const { data } = await baseURL.delete(`/users/${userId}`);
      showToastSuccessMessage('Successfully deleted a user');

      return data;
    } catch (error) {
      showToastErrorMessage('Something went wrong');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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
