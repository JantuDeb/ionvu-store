export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";
export const GET_WISHLIST_DATA = "GET_WISHLIST_DATA";

export const wishlistReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_WISHLIST_DATA:
      return payload.products;
    case ADD_TO_WISHLIST:
      return [...state, payload];
    case REMOVE_FROM_WISHLIST:
      return state.filter((product) => product._id !== payload.id);
    default:
      return state;
  }
};
