import React from "react";

const ShoppingCart = (props) => {
  return <p>{`${props.quantity}x ${props.item}`}</p>;
};

export default ShoppingCart;
