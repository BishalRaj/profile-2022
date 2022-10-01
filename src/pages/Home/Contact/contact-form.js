import React from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import img from "../../../images/one.png";
function form() {
  return (
    <Row>
      <Col
        lg={6}
        md={6}
        className="overflow-hidden d-flex align-items-center justify-content-center default-bg-color-secondary px-4 pt-4 mb-5"
      >
        <Image src={img} className="profile-img" fluid></Image>
      </Col>
      <Col lg={6} md={6} className="bg-light p-5 mb-5">
        <Form>
          <Form.Group>
            {/* <Form.Label>Name</Form.Label> */}
            <Form.Control
              type="text"
              placeholder="Your Name"
              className="py-4"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="email"
              placeholder="Your Email"
              className="py-4"
            />
          </Form.Group>

          <Form.Group>
            <Form.Control type="text" placeholder="Subject" className="py-4" />
          </Form.Group>

          <Form.Group>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Message"
              className="py-4"
            />
          </Form.Group>

          <Button
            variant="none"
            type="submit"
            className="rounded-pill default-xxs-font px-5 py-3 default-bg-color-primary text-uppercase letter-spacing-1"
          >
            Send Message
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default form;
