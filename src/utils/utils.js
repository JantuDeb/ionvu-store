export const getDiscountedPrice = (price, discount) =>
  price - Math.ceil(discount * price);

export const getProductWithTag = ({ tag, products }) =>
  products.filter((product) => product.tag === tag);

export const getPriceDetails = (cartList) =>
  cartList.reduce(
    (acc, cur) => ({
      ...acc,
      totalPrice: acc.totalPrice + cur.product.price * cur.quantity,
      totalDiscount:
        acc.totalDiscount +
        Math.ceil(cur.product.price * cur.quantity * cur.product.discount),
    }),

    { totalPrice: 0, totalDiscount: 0 }
  );

  export const getAddress = (addresses, _id) => addresses.find((adds) => adds._id === _id);