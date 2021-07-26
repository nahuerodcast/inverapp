import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemList } from "../../components/ItemList";
import "../ItemListContainer/index.css";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("../stocks.json")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setProductos(data);
        }, 100);
      });
  }, []);

  return (
    <div>
      <div className="acciones-recomendadas">
        <h1 className="text-center">Inverapp</h1>
        <h4 className="text-center"> Acciones recomendadas del día</h4>
      </div>
      <div id="nahue">
        <ItemList productos={productos} />
      </div>
    </div>
  );
};
