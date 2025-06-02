import {
  baseURL,
  deleteAuthHeader,
  setAuthHeader,
} from '../../utils/axiosDefaultSettings.js';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  showToastErrorMessage,
  showToastSuccessMessage,
} from '../../utils/toastMessages.js';

export const registerUserThunk = createAsyncThunk(
  'auth/register',
  async (credentials) => {
    try {
      await baseURL.post('/auth/register', credentials);

      return showToastSuccessMessage(`Successfully register a user!`);
    } catch (error) {
      if (error.status === 409) {
        return showToastErrorMessage('User already exist! Please log in!');
      }

      return showToastErrorMessage(
        'Something went wrong, please try again later!'
      );
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const data = await baseURL.post('/auth/login', credentials, {
        withCredentials: true,
      });

      setAuthHeader(data.accessToken);

      showToastSuccessMessage(`Welcome, ${data.first_name} ${data.last_name}!`);

      return data;
    } catch (error) {
      if (error.status === 409) {
        showToastErrorMessage('Error, user with this email not exist!');
        return thunkApi.rejectWithValue(
          'Error, user with this email not exist!'
        );
      }

      showToastErrorMessage('Something went wrong, please try again later!');

      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutUserThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
    const token = thunkApi.getState().auth.token;
    try {
      const data = await baseURL.post(
        '/auth/logout',
        {},
        { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
      );

      showToastSuccessMessage('Successfully logout!');

      return data;
    } catch (error) {
      showToastErrorMessage('Something went wrong, please try again later!');

      return thunkApi.rejectWithValue(error.message);
    } finally {
      deleteAuthHeader();
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const token = thunkApi.getState().auth.token;
    if (token === null) return thunkApi.rejectWithValue('Token is not exist');
    try {
      const data = await baseURL.post(
        '/auth/refresh',
        {},
        { withCredentials: true }
      );

      setAuthHeader(data.accessToken);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
