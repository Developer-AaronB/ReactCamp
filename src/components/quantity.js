import React, { useState } from "react";
import ShoppingCart from "./shoppingCart";

const Quantity = () => {
  const [quantity, setQuantity] = useState(5);
  const [itemName, setItemName] = useState("");

  const onMinusClick = () => {
    setQuantity(quantity - 1);
  };

  const onPlusClick = () => {
    setQuantity(quantity + 1);
  };

  const onNameChange = (event) => {
    setItemName(event.target.value);
  };
  return (
    <>
      <h1>Quantity</h1>
      <button onClick={onMinusClick}>-</button>
      <span>{quantity}</span>
      <button onClick={onPlusClick}>+</button>
      <input onChange={onNameChange} />
      <ShoppingCart quantity={quantity} item={itemName} />
    </>
  );
};

export default Quantity;
