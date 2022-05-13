export const GET_ADDRESSES = "GET_ADDRESSES";
export const ADD_ADDRESS = "ADD_ADDRESS";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const DELETE_ADDRESS = "DELETE_ADDRESS";

export const addressReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ADDRESSES:
      return { ...state, addresses: payload.addresses };
    case ADD_ADDRESS:
      return { ...state, addresses: [payload.address, ...state.addresses] };
    case DELETE_ADDRESS:
      return {
        ...state,
        addresses: state.addresses.filter((addrs) => addrs._id !== payload._id),
      };
    default:
      break;
  }
}; 
