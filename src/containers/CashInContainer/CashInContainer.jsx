import React from "react";
import { Card } from "react-bootstrap";
import "../CashInContainer/CashInContainer.css";

export const CashInContainer = () => {
  return (
    <div className="cash-in-container animate__animated animate__fadeIn">
      <img
        src="../undraw_wallet_aym5.png"
        alt="invest now"
        className="cash-in-img"
      />
      <h1 className="cash-in-heading">
        Empezá a invertir <strong>ahora</strong>
      </h1>
      <p className="cash-in-detail">
        Para comenzar a invertir necesitas realizar una transferencia bancaria
        automática hacia nuestras cuentas bancarias.
      </p>
      <div className="cash-in-flex">
        <Card style={{ width: "26rem" }} className="cash-in-card">
          <Card.Body>
            <Card.Title className="text-center">
              <strong className="cash-in-title">
                Transferí pesos argentinos
              </strong>
            </Card.Title>
            <Card.Text className="cash-in-desc text-center">CBU: 1430001713000119250011</Card.Text>
            <Card.Text className="cash-in-desc text-center">Alias: inverapp.pesos</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "26rem" }} className="cash-in-card">
          <Card.Body>
            <Card.Title className="text-center">
              <strong className="cash-in-title">
                Transferí dólares americanos
              </strong>
            </Card.Title>
            <Card.Text className="cash-in-desc text-center">CBU: 1430001714000119250029</Card.Text>
            <Card.Text className="cash-in-desc text-center">Alias: inverapp.dolares</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <h4>ATENCIÓN</h4>
      <p className="cash-in-detail">
        Las cuentas bancarias mencionadas no representan cuentas en entidades
        financieras ni reguladas, son meramente a modo de ejemplo para el
        proyecto final del curso de React en Coderhouse.
      </p>
    </div>
  );
};
