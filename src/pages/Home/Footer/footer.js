import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
function footer() {
  var date = new Date();
  var year = date.getFullYear();
  var linkData = ["Home", "About", "Services", "Projects", "Contact"];
  var serviceData = [
    "Web Design",
    "Web Development",
    "App Development",
    "Data Analysis",
    "Data Visualization",
  ];
  var key = 0;
  var links = linkData.map((result) => {
    return (
      <li className="my-2" key={key++}>
        {result}
      </li>
    );
  });

  var service = serviceData.map((result) => {
    return (
      <li className="my-2" key={key++}>
        {result}
      </li>
    );
  });

  return (
    <Container className="py-3" id="footer">
      <Row>
        <Col lg={3} md={3} sm={6} xs={6}>
          <p className="default-sm-font">About</p>
          <p className="my-4">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </Col>

        <Col lg={3} md={3} sm={6} xs={6}>
          <p className="default-sm-font">Links</p>
          <div className="my-4 footer mx-0">
            <ul className="mx-0 px-0">{links}</ul>
          </div>
        </Col>

        <Col lg={3} md={3} sm={6} xs={6}>
          <p className="default-sm-font">Services</p>
          <div className="my-4 footer mx-0">
            <ul className="mx-0 px-0">{service}</ul>
          </div>
        </Col>

        <Col lg={3} md={6} sm={12} xs={12} className="question">
          <p className="default-sm-font">Have a Question?</p>
          <Row className="my-4">
            <Col lg={1} md={1} sm={1} xs={1}>
              <FontAwesomeIcon icon={["fas", "map-marker-alt"]} />
            </Col>
            <Col lg={1} md={1} sm={1} xs={1}></Col>
            <Col lg={9} md={9} sm={9} xs={9} className="m-0 p-0">
              Karyabinayak-22, Lalitpur, Nepal
            </Col>
          </Row>
          <Row className="my-2">
            <Col lg={1} md={1} sm={1} xs={1}>
              <FontAwesomeIcon icon={["fas", "phone-alt"]} />
            </Col>
            <Col lg={1} md={1} sm={1} xs={1}></Col>
            <Col lg={9} md={9} sm={9} xs={9} className="m-0 p-0">
              +977 9843219471
            </Col>
          </Row>
          <Row className="my-2">
            <Col lg={1} md={1} sm={1} xs={1}>
              <FontAwesomeIcon icon={["fas", "envelope"]} />
            </Col>
            <Col lg={1} md={1} sm={1} xs={1}></Col>
            <Col lg={9} md={9} sm={9} xs={9} className="m-0 p-0">
              bisal1shakya @gmail.com
            </Col>
          </Row>
        </Col>
        <Col lg={12} md={6}>
          <div
            className=" default-bg-color-secondary d-flex align-items-center justify-content-center mb-5 icon-div float-left mr-3"
            style={{ borderRadius: "50%", height: "55px", width: "55px" }}
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              size="2x"
              className="default-color-primary"
            ></FontAwesomeIcon>
          </div>
          <div
            className=" default-bg-color-secondary d-flex align-items-center justify-content-center mb-5 icon-div float-left mr-3"
            style={{ borderRadius: "50%", height: "55px", width: "55px" }}
          >
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              size="2x"
              className="default-color-primary"
            ></FontAwesomeIcon>
          </div>
          <div
            className=" default-bg-color-secondary d-flex align-items-center justify-content-center mb-5 icon-div "
            style={{ borderRadius: "50%", height: "55px", width: "55px" }}
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              size="2x"
              className="default-color-primary"
            ></FontAwesomeIcon>
          </div>
        </Col>
        <Col
          lg={12}
          className="py-2 text-center default-xs-font letter-spacing-2"
        >
          Copyright ©{year} All rights reserved
        </Col>
      </Row>
    </Container>
  );
}
export default footer;
