import React from "react";
import TradingViewWidget from "react-tradingview-widget";
import "../InvestContainer/InvestContainer.css";

export const InvestContainer = () => {
  return (
    <div className="invest-container">
      <TradingViewWidget></TradingViewWidget>
      <div className="main-tickerbox">
        <div className="card" style={{ width: "18rem" }}>
          <div id="card-content" style={{ padding: "20px" }}>
            <br />
            <h1 className="text-center">Invertir</h1>
            <div className="card-body" id="card-body">
              <h6 className="saldo">Saldo</h6>
              <h5 className="card-title"> </h5>
              <div className="input-group flex-nowrap">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="addon-wrapping">
                    $
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese su ticker"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  id="producto"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control "
                  id="precio"
                  placeholder="Precio"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="cantidad"
                  placeholder="Cantidad"
                />
              </div>
              <input
                class="form-control form-control-sm"
                type="text"
                id="comisiones"
                placeholder="Comisiones: 0,5%"
                readonly
                disabled
              />
              <br />
              <div class="row justify-content-center align-items-center">
                <button
                  href="#"
                  class="btn btn-success col-sm-5"
                  id="botonConfirmar"
                  style={{ marginRight: "5px" }}
                  type="reset"
                  onclick="capturarOnClick();"
                >
                  Comprar
                </button>
                <button
                  href="#"
                  class="btn btn-danger col-sm-5"
                  id="botonConfirmar3"
                  style={{ marginRight: "5px" }}
                  type="reset"
                  onclick="capturarOnClick();"
                >
                  Vender
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
