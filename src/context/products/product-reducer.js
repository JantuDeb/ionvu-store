export const SORT_PRODUCT = "SORT_PRODUCT";
export const FILTER_RATING = "FILTER_RATING";
export const FILTER_CATEGORY = "FILTER_CATEGORY";
export const CLEAR_FILTER = "CLEAR_FILTER";
export const FILTER_BY_PRICE = "FILTER_BY_PRICE";
export const initialState = {
  sortBy: {
    name: "",
    order: "",
  },
  category: {},
  rating: "",
  filterByPrice:{
    start:0,
    end:10000
  }
};

export const productReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SORT_PRODUCT:
      return { ...state, sortBy: payload };
    case FILTER_CATEGORY:
      if (Object.keys(state.category).length === 0)
        return {
          ...state,
          category: { ...state.category, [payload.categoryName]: true },
        };
      return {
        ...state,
        category: {
          ...state.category,
          [payload.categoryName]: !state.category[payload.categoryName],
        },
      };
    case FILTER_RATING:
      return { ...state, rating: payload.starCount };
    case FILTER_BY_PRICE:
      return { ...state, filterByPrice: payload };
    case CLEAR_FILTER:
      return initialState;
    default:
      return state;
  }
};
