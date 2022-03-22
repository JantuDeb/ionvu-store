export const getDiscountedPrice = (price, discount) =>
  price - Math.ceil(discount * price);

export const getProductWithTag = ({ tag, products }) =>
  products.filter((product) => product.tag === tag);
