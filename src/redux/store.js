import userReducer from './goods/slice.js';
import authReducer from './auth/slice.js';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    goods: userReducer,
    auth: authReducer,
  },
});

export default store;
