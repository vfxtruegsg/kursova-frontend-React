import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  loginUserThunk,
  logoutUserThunk,
  refreshUserThunk,
} from './operations.js';

const initialState = {
  user: {
    userId: null,
    firstName: null,
    lastName: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isAuthLoading: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.user.userId = action.payload.id;
        state.user.firstName = action.payload.first_name;
        state.user.lastName = action.payload.last_name;
        state.user.email = action.payload.email;
        state.token = action.payload.accessToken;
        state.isAuthLoading = false;
        state.isLoggedIn = true;
      })

      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.token = action.payload.accessToken;
      })

      .addCase(logoutUserThunk.fulfilled, () => {
        return initialState;
      })

      .addMatcher(
        isAnyOf(
          loginUserThunk.pending,
          refreshUserThunk.pending,
          logoutUserThunk.pending
        ),
        (state) => {
          state.isAuthLoading = true;
          state.isLoggedIn = false;
        }
      )

      .addMatcher(
        isAnyOf(
          loginUserThunk.rejected,
          refreshUserThunk.rejected,
          logoutUserThunk.rejected
        ),
        (state) => {
          state.isAuthLoading = false;
          state.isLoggedIn = false;
        }
      );
  },
});

export default slice.reducer;
