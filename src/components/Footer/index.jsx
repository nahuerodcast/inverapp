import 'bootstrap/dist/css/bootstrap.min.css';
import '../NavBar/index.css'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from "react-router-dom";


function Footer() {
    return (
        <div className="Navbar">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>
                    <Link to={'/'} className="text-decoration">Inverapp</Link>
                </Navbar.Brand>
                <Navbar bg="light">
                    <Container>
                        <Navbar.Brand className="inverapp-disclaimer" size="sm">  Todos los derechos reservados.</Navbar.Brand>
                    </Container>
                </Navbar>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                </Navbar.Collapse>
            </Navbar>
        </div>

    );
}

export default Footer;
