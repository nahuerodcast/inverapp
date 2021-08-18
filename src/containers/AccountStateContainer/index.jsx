import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../AccountStateContainer/index.css";

export const AccountStateContainer = () => {
  let n = new Date();
  let y = n.getFullYear();
  let m = n.getMonth() + 1;
  let d = n.getDate();
  let inverappDate = d + "/" + m + "/" + y;

  return (
    <div className="inverapp-account-state animate__animated animate__fadeIn">
      <h1>Estado de cuenta al {inverappDate}</h1>
      <h4>Resumen de movimientos</h4>
      <div className="account-state-main">
        <div className="account-state-currencies">
          <div className="main-box main-box-container">
            <div className="account-state-flex">
              <h3 className="font-weight-bold">Total de la cuenta</h3>
              <h3 className="font-weight-bold saldo">ARS:</h3>
            </div>
            <div className="account-state-flex">
              <h5>Saldo disponible</h5>
              <h5 className="saldo">ARS:</h5>
            </div>
            <div className="account-state-flex">
              <h5>Inversiones</h5>
              <h5 className="inversiones">ARS:</h5>
            </div>
          </div>
          <div className="main-box main-box-container">
            <div className="account-state-flex">
              <h3 className="font-weight-bold">Total de la cuenta</h3>
              <h3 className="font-weight-bold saldo">USD:</h3>
            </div>
            <div className="account-state-flex">
              <h5>Saldo disponible</h5>
              <h5 className="saldo">USD:</h5>
            </div>
            <div className="account-state-flex">
              <h5>Inversiones</h5>
              <h5 className="inversiones">USD:</h5>
            </div>
          </div>
        </div>
        <div className="main-box">
          <div className="account-state-flex">
            <h3 className="font-weight-bold">Mis inversiones</h3>
            <h3 className="font-weight-bold inversiones">ARS: $0</h3>
          </div>
          <div className="separador"> </div>
          <ul className="account-main-list font-weight-bold">
            <li>Cantidad</li>
            <li>Producto</li>
            <li>Precio</li>
            <li>Total</li>
          </ul>
          <div className="portfolio"></div>
        </div>
      </div>
    </div>
  );
};
