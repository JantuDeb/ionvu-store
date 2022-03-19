import { getDiscountedPrice } from "./utils";

export const composeFilterFunc =
  (state, ...functions) =>
  (products) =>
    functions.reduce((acc, curr) => {
      return curr(state, acc);
    }, products);

export const sortProduct = (state, products) => {
  console.log(state.sortBy.name);
  switch (state.sortBy.name) {
    case "price":
      if (state.sortBy.order === "low-to-high")
        return [...products].sort(
          (pre, cur) =>
            getDiscountedPrice(pre.price, pre.discount) -
            getDiscountedPrice(cur.price, cur.discount)
        );
      else if (state.sortBy.order === "high-to-low")
        return [...products].sort(
          (pre, cur) =>
            getDiscountedPrice(cur.price, cur.discount) -
            getDiscountedPrice(pre.price, pre.discount)
        );
      return products;
    case "newest-first":
      return [...products].sort(
        (pre, cur) => new Date(cur.createdAt) - new Date(pre.createdAt)
      );
    default:
      return products;
  }
};

// filter by category
export const filterCategory = (state, products) => {
  return Object.keys(state.category).length === 0 ||
    Object.values(state.category).every((v) => v === false)
    ? products
    : products.filter(({ category }) => state.category[category.name]);
};

// filter by rating

export const filterRating = (state, products) => {
  return state.rating === ""
    ? products
    : products.filter(({ rating }) => rating >= state.rating);
};

export const filterPrice = (state, products) => {
  if (state.filterByPrice.end === 0) return products;
  return products.filter(
    (product) =>
      product.price > state.filterByPrice.start &&
      product.price < state.filterByPrice.end
  );
};
