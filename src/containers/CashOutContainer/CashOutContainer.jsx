import React from "react";
import { Card, InputGroup, FormControl, Button } from "react-bootstrap";
import "../CashOutContainer/CashOutContainer.css";

export const CashOutContainer = () => {
  return (
    <div className="cash-in-container animate__animated animate__fadeIn">
      <img
        src="../undraw_Vault_re_s4my.png"
        alt="invest now"
        className="cash-in-img"
      />
      <h1 className="cash-in-heading">
        Solicitá un <strong>egreso de fondos</strong>
      </h1>
      <p className="cash-in-detail">
        Podes egresar los fondos líquidos que tengas en tu cuenta de
        inversiones, hacia tu cuenta de banco o billetera virtual.
      </p>
      <div className="cash-in-flex">
        <Card style={{ width: "26rem" }} className="cash-in-card">
          <Card.Body>
            <Card.Title className="text-center">
              <strong className="cash-in-title">
                Egresar pesos argentinos
              </strong>
            </Card.Title>
            <Card.Text className="cash-in-desc text-center">
              Saldo: $0
            </Card.Text>
            <InputGroup size="sm" className="mb-3 cash-out-input">
              <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
            <div className="cash-out-button">
              <Button className="boton">Egresar</Button>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "26rem" }} className="cash-in-card">
          <Card.Body>
            <Card.Title className="text-center">
              <strong className="cash-in-title">
                Egresar dólares americanos
              </strong>
            </Card.Title>
            <Card.Text className="cash-in-desc text-center">
              Saldo: US$0
            </Card.Text>
            <InputGroup size="sm" className="mb-3 cash-out-input">
              <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
            <div className="cash-out-button">
              <Button className="boton">Egresar</Button>
            </div>
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
