import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../InverappNotFound/index.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const InverappNotFound = () => {
  return (
    <div className="inverapp-notfound">
      <img src="../undraw_warning_cyit.png" alt="notFound" className="main-img-notfound"/>
      <h1>Error 404</h1>
      <h4>Sección en desarrollo</h4>
      <Link to={"/"} className="inverapp-buttons">
        <Button variant="primary" className="inverapp-buttons">
          Volver al home
        </Button>
      </Link>
    </div>
  );
};
