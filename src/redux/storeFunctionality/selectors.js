// user

export const selectUsersList = (state) => state.store.user.usersList;

// goods

export const selectGoodsList = (state) => state.store.goods.goodsList;
export const selectGoodInformation = (state) => state.store.goods.selectedGood;

// base selectors

export const selectIsLoading = (state) => state.store.isLoading;
