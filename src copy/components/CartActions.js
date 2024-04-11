export const addToCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

export const selectShipmentMethod = (method) => {
  return {
    type: "SELECT_SHIPMENT_METHOD",
    payload: method,
  };
};
