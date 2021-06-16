import '../../src/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'

function nave() {
  return (
    <div className="Navbar">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Inverapp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Estado de cuenta</Nav.Link>
              <Nav.Link href="#link">Estado de órdenes</Nav.Link>
              <Nav.Link href="#link">Invertir</Nav.Link>
            </Nav>
            <Form inline>
              <NavDropdown title="Mi cuenta" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Invertir</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Cargar Saldo</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Extraer fondos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Configuración</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Perfil</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Salir</NavDropdown.Item>
              </NavDropdown>
            </Form>
          </Navbar.Collapse>
        </Navbar>
    </div>

  );
}

export default nave;
