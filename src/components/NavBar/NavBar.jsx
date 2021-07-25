import "bootstrap/dist/css/bootstrap.min.css";
import "../NavBar/index.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function nave() {
  return (
    <div className="Navbar">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to={"/"} className="text-decoration">
            Inverapp
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to={"/estado-de-cuenta"} className="text-decoration">
                Estado de cuenta
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/acciones-recomendadas"} className="text-decoration">
                Acciones recomendadas
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/invertir"} className="text-decoration">
                Invertir
              </Link>
            </Nav.Link>
          </Nav>
          <Form inline>
            <NavDropdown title="Mi cuenta" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Invertir</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                Cargar Saldo
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                Extraer fondos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Configuración
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Perfil</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Salir</NavDropdown.Item>
            </NavDropdown>
            <CartWidget />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default nave;
