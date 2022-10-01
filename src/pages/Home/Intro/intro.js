import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-scroll";
import logo from "../../../images/one.png";

function Intro() {
  return (
    <Container className="c-h-700" id="intro">
      <Row className="h-100 align-items-center">
        <Col lg={6} md={6} sm={12} xs={12}>
          <h6 className="font-weight-bold default-color-primary mb-4">
            HELLO! <span className=" ml-3">नमस्ते</span>
          </h6>
          <h1 className="font-weight-bold default-bg-font">
            I'm <span className="default-color-primary">Bishal</span>
          </h1>
          <h1 className="font-weight-bold default-color-primary default-bg-font">
            Raj Shakya
          </h1>
          <h3 className="font-weight-normal mt-4">A Freelance Web Developer</h3>

          <Link
            to="projects"
            spy={true}
            className="btn rounded-pill intro-btn py-2 px-5"
          >
            <small>
              <b>My Works</b>
            </small>
          </Link>
          <Link
            to="contact"
            spy={true}
            className="btn rounded-pill intro-btn outline-btn ml-2 py-2 px-5"
          >
            <small>
              <b>Contact Me</b>
            </small>
          </Link>
        </Col>
        <Col lg={6} md={6} xs={12}>
          <Image src={logo} className="w-75 profile-img" />
        </Col>
      </Row>
    </Container>
  );
}

export default Intro;
