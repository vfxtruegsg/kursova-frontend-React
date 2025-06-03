// goods

export const selectGoodsList = (state) => state.goods.goods.goodsList;
export const selectGoodInformation = (state) => state.goods.goods.selectedGood;

// cart

export const selectCartWithProductData = (state) =>
  state.goods.cartContents.cartContents;

// base selectors

export const selectIsLoading = (state) => state.goods.isLoading;
