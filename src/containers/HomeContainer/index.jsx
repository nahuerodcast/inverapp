import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../HomeContainer/index.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const HomeContainer = () => {
  return (
    <div className="inverapp-home">
      <h1>
        Bienvenido a <strong>Inverapp</strong>
      </h1>
      <h4>¿Que deseas hacer?</h4>
      <div className="inverapp-home-cards">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Cargá saldo de Inverapp</Card.Title>
            <Card.Text>
              Podes ingresar pesos o dólares. Los mismos van a ser acreditados
              en tu cuenta.
            </Card.Text>
            <Button variant="primary">
              <Link to={"/cargar-saldo"} className="inverapp-buttons">
                Cargar saldo
              </Link>
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Invertí en simples pasos</Card.Title>
            <Card.Text>
              Ingresando acá vas a poder acceder a mas de 5 mercados en
              simultáneo
            </Card.Text>
            <Button variant="success">
              <Link to={"/invertir"} className="inverapp-buttons">
                Invertir
              </Link>
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Solicitá un egreso</Card.Title>
            <Card.Text>
              Podes egresar fondos hacia tu cuenta bancaria local o del
              exterior.
            </Card.Text>
            <Button
              variant="primary"
              to={"/egresar-fondos"}
              className="inverapp-buttons"
            >
              <Link to={"/egresar-fondos"} className="inverapp-buttons">
                Egresar fondos
              </Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
