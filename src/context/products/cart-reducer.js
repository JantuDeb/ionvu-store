export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROMN_CART = "REMOVE_FROMN_CART";
export const DEC_CART_QUANTITY = "DEC_CART_QUANTITY";
export const INC_CART_QUANTITY = "INC_CART_QUANTITY";
export const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART:
      if (state.some(({ product }) => product._id === payload._id))
        return state.map((cart) =>
          cart.product._id == payload._id
            ? { ...cart, quantity: cart.quantity + 1 }
            : cart
        );
      return [...state, { product: payload, quantity: 1 }];
    case REMOVE_FROMN_CART:
      return state.filter(({ product }) => product._id !== payload._id);

    case DEC_CART_QUANTITY:
      return state.map((cart) =>
        cart.product._id === payload._id && cart.quantity > 1
          ? { ...cart, quantity: cart.quantity - 1 }
          : cart
      );

    case INC_CART_QUANTITY:
      return state.map((cart) =>
        cart.product._id === payload._id
          ? { ...cart, quantity: cart.quantity + 1 }
          : cart
      );
    default:
      return state;
  }
};
