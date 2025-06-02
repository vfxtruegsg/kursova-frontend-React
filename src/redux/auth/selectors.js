export const selectUserData = (state) => state.auth.user;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsAuthLoading = (state) => state.auth.isAuthLoading;
