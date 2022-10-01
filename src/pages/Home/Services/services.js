import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import { ReactComponent as Logo } from "./seo.svg";
function services() {
  const serviceTab = [];
  for (let index = 0; index < 5; index++) {
    serviceTab.push(
      <Col lg={4} md={6} sm={12} xs={12} className="mb-4" key={index}>
        <div className="p-5 default-bg-color-secondary text-center icon-div">
          <span>
            <Logo className="w-25 my-3 default-color-primary " />
          </span>
          <p className="text-center text-uppercase default-color-secondary default-xxs-font letter-spacing-3">
            Web Development
          </p>

          <span className="default-bg-color-primary d-flex mx-auto mb-2 underscore"></span>
        </div>
      </Col>
    );
  }

  return (
    <Container className="my-5" id="service">
      <p className="default-md-font w-100 text-center mt-5 pt-5">Services</p>
      <Row className="justify-content-center">{serviceTab}</Row>
    </Container>
  );
}

export default services;
