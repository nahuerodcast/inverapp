import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../InverappNotFound/index.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const InverappNotFound = () => {
  return (
    <div className="inverapp-account-state">
      <h1>Error 404</h1>
      <h4>Sección en desarrollo</h4>
      <Button variant="primary" className="inverapp-buttons">
        <Link to={"/"} className="inverapp-buttons">
          Volver al home
        </Link>
      </Button>
    </div>
  );
};
