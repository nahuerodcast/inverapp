import React from "react";
import "../OrderWidget/OrderWidget.css";
import CartWidget from "../CartWidget/CartWidget";

export const OrderWidget = ({ orderCount }) => {
  return (
    <div className="fixed-orderState">
      <div>
        <h4>Resumen de órdenes: </h4>
      </div>
      <CartWidget value={orderCount} className="animate__slideInUp"/>
    </div>
  );
};
