import axios from "axios";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  var hasError = false;

  const submitData = () => {
    axios.get("/test").then((data) => {
      console.log(data);
    });
  };

  return (
    <Container className="vh-100">
      <Row className="h-100 ">
        <Col
          sm={10}
          lg={5}
          className="mx-auto my-auto shadow px-5 py-5 rounded"
        >
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              {hasError ? (
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" onClick={submitData}>
              Login
            </Button>{" "}
            <br />
            <small>or</small> <br />
            <Link to="/register">Register</Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
