const initialState = {
  cartItems: [],
  shipmentMethod: "",
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "SELECT_SHIPMENT_METHOD":
      return {
        ...state,
        shipmentMethod: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
