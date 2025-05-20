import { baseURL } from '../../utils/axiosDefaultSettings.js';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllUsersThunk = createAsyncThunk(
  'users/getAllUsers',
  async (_, thunkAPI) => {
    try {
      const { data } = await baseURL.get('/users');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
