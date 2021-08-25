import React, { useState } from "react";
import "firebase/auth";
import { Form, Button } from "react-bootstrap";
import "../Auth/Auth.css";
import { useFirebaseApp } from "reactfire";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const firebase = useFirebaseApp();

  const submit = async () => {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="auth-box">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            submit();
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};
