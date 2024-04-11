import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectShipmentMethod } from "./CartActions";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const shipmentMethod = useSelector((state) => state.cart.shipmentMethod);
  const [selectedMethod, setSelectedMethod] = useState("");

  const dispatch = useDispatch();

  const handleSelectShipmentMethod = () => {
    dispatch(selectShipmentMethod(selectedMethod));
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>
            {item.make} {item.model}
          </p>
          <p>${item.price}</p>
        </div>
      ))}
      <div>
        <label htmlFor="shipmentMethod">Select Shipment Method:</label>
        <select
          id="shipmentMethod"
          value={selectedMethod}
          onChange={(e) => setSelectedMethod(e.target.value)}
        >
          <option value="">-- Select --</option>
          <option value="Standard">Standard</option>
          <option value="Express">Express</option>
        </select>
        <button onClick={handleSelectShipmentMethod}>
          Select Shipment Method
        </button>
      </div>
      <p>Selected Shipment Method: {shipmentMethod}</p>
    </div>
  );
};

export default CartPage;
