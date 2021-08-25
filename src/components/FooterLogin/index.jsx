import "bootstrap/dist/css/bootstrap.min.css";
import "../NavBar/index.css";
import "../Footer/index.css";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const FooterLogin = () => {
  return (
    <div className="Navbar">
      <Navbar bg="light" expand="lg" className="navbar-inverapp">
        <Navbar.Brand>
          <Link to={"/"} className="text-decoration inverappFooter">
            Inverapp
          </Link>
        </Navbar.Brand>
        <Navbar bg="light">
          <Container className="footer-sm">
            <ul className="footer-list">
              <Link
                to={{ pathname: "https://facebook.com" }}
                target="_blank"
                className="text-decoration"
              >
                <li>Facebook</li>
              </Link>
              <Link
                to={{ pathname: "https://twitter.com" }}
                target="_blank"
                className="text-decoration"
              >
                <li>Twitter</li>
              </Link>
              <Link
                to={{ pathname: "https://instagram.com" }}
                target="_blank"
                className="text-decoration"
              >
                <li>Instagram</li>
              </Link>
              <Link
                to={{ pathname: "https://linkedin.com" }}
                target="_blank"
                className="text-decoration"
              >
                <li>LinkedIn</li>
              </Link>
            </ul>
          </Container>
        </Navbar>
        <Navbar bg="light">
          <Container>
            <p className="inverapp-disclaimer">
              Inverapp es una aplicación <strong>demo</strong> realizada para el
              proyecto final de <strong>React</strong> en Coderhouse. La misma
              no representa ninguna entidad financiera, bancaria o similar.
              Tampoco representa ninguna recomendación de inversión. Todos los
              derechos reservados.
            </p>
          </Container>
        </Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      </Navbar>
    </div>
  );
};