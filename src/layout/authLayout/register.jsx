import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Register = () => {
    return (
        <Container className='vh-100'>
            <Row className='h-100 '>
                <Col sm={5} className="mx-auto my-auto">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>

                    </Form>
                </Col>
            </Row>
        </Container>

    )
}

export default Register;