import { Button, Navbar, Nav, Container, Form, Modal } from "react-bootstrap";
import React, { useState } from "react";
import "../Login/Login.css";
import "firebase/auth";
import { useFirebaseApp } from "reactfire";
import { useLogin } from "../context/LoginProvider";

export const Login = () => {
  const { setIsLoggedin } = useLogin();
  // usando State para despliegue de modals: registro y login
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  // Envío de datos a Firebase

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const firebase = useFirebaseApp();
  const submit = async () => {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  //Recepción de datos para login Firebase

  const login = async () => {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="animate__animated animate__fadeIn">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <strong className="inverapp-logo-login">Inverapp</strong>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Inversiones</Nav.Link>
            <Nav.Link href="#pricing">Nosotros</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
          <div className="outline-welcome-buttons">
            <Button
              variant="outline-success"
              className="boton"
              onClick={handleShow}
            >
              Abrir cuenta
            </Button>
            <Button
              variant="outline-primary"
              className="boton"
              onClick={handleShowLogin}
            >
              Iniciar sesión
            </Button>
          </div>
        </Container>
      </Navbar>
      <div className="login-main-body">
        <div className="login-body show">
          <div className="welcome">
            <h1 className="text-center">
              Bienvenido a <strong>Inverapp</strong>
            </h1>
            <h4>Invertí en simples pasos</h4>
            <div className="welcome-buttons">
              <Button variant="success" className="boton" onClick={handleShow}>
                Abrir cuenta
              </Button>
              <Button className="boton" onClick={handleShowLogin}>
                Iniciar sesión
              </Button>
            </div>
          </div>
          <img
            src="../undraw_Access_account_re_8spm.png"
            alt="inverapp"
            className="welcome-img animate__animated animate__bounce"
          />
        </div>

        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          className="register-modal"
        >
          <div className="auth-box">
            <h1 className="text-center" style={{ fontSize: "50px" }}>
              Abrí tu cuenta
            </h1>
            <h4 className="text-center text-muted" style={{ fontSize: "18px" }}>
              en menos de 5 minutos
            </h4>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresar email"
                  onChange={(ev) => setEmail(ev.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingrese su contraseña."
                  onChange={(ev) => setPassword(ev.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Acepto términos y condiciones"
                />
              </Form.Group>
            </Form>
          </div>
          <Modal.Footer className="botones-registro">
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button
              variant="success"
              onClick={(event) => {
                event.preventDefault();
                submit();
                alert("Su cuenta fue creada con éxito");
              }}
            >
              Enviar
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={showLogin}
          onHide={handleCloseLogin}
          size="lg"
          className="register-modal"
        >
          <div className="auth-box">
            <h1 className="text-center" style={{ fontSize: "50px" }}>
              Iniciar sesión
            </h1>
            <h4 className="text-center text-muted" style={{ fontSize: "18px" }}>
              Por favor ingresá tu email y contraseña
            </h4>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresar email"
                  onChange={(ev) => setEmail(ev.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingrese su contraseña."
                  onChange={(ev) => setPassword(ev.target.value)}
                />
              </Form.Group>
            </Form>
          </div>
          <Modal.Footer className="botones-registro">
            <Button variant="secondary" onClick={handleCloseLogin}>
              Cerrar
            </Button>
            <Button
              variant="primary"
              onClick={(event) => {
                event.preventDefault();
                login();
                setIsLoggedin(true);
              }}
            >
              Enviar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <Navbar bg="light" fixed="bottom">
        <Container>
          <Navbar.Brand href="#home">
            <strong className="inverapp-logo-login">Inverapp</strong>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Desarrollado por:
              <a href="https://www.linkedin.com/in/nahuel-rodriguez-21260b186">
                Nahuel Rodriguez
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
