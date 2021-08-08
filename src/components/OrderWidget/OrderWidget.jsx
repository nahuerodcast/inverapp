import React from "react";
import "../OrderWidget/OrderWidget.css";
import CartWidget from "../CartWidget/CartWidget";

export const OrderWidget = ({ orderCount }) => {
  return (
    <div className="fixed-orderState animate__animated animate__slideInUp ">
      <div>
        <h4>Resumen de órdenes: </h4>
      </div>
      <CartWidget value={orderCount} />
    </div>
  );
};
