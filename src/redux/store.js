import userReducer from './storeFunctionality/slice.js';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    store: userReducer,
  },
});

export default store;
