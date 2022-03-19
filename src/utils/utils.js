export const getDiscountedPrice = (price, discount) =>
  price - Math.ceil(discount * price);
