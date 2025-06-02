// user

export const selectUsersList = (state) => state.goods.user.usersList;

// goods

export const selectGoodsList = (state) => state.goods.goods.goodsList;
export const selectGoodInformation = (state) => state.goods.goods.selectedGood;

// base selectors

export const selectIsLoading = (state) => state.goods.isLoading;
