import React from "react";
import { Cards } from "../Cards/index";

export const ItemList = ({ productos, onAdd }) => {
  return (
    <>
      {productos.map((product) => {
        return <Cards product={product} key={product.id} onAdd={onAdd} />;
      })}
    </>
  );
};
