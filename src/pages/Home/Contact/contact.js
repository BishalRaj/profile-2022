import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "./contact-form";

function contact() {
  var data = [
    { key: "Address", value: "Karyabinayak-22,Lalitpur" },
    { key: "Contact Number", value: "+977-9843219471" },
    { key: "Email Address", value: "bisal1shakya @gmail.com" },
    { key: "Website", value: "https://bishalraj. github.io/react-profile/" },
  ];

  var key = 0;
  var contacts = data.map((values) => {
    return (
      <Col
        lg={3}
        md={3}
        sm={12}
        xs={12}
        className="p-5 sm-my-0 sm-py-5"
        key={key++}
      >
        <div
          className="default-bg-color-secondary mx-auto d-flex align-items-center justify-content-center mb-4 icon-div"
          style={{ borderRadius: "50%", height: "100px", width: "100px" }}
        >
          <FontAwesomeIcon
            icon={["far", "file-code"]}
            size="2x"
            className="default-color-primary"
          ></FontAwesomeIcon>
        </div>
        <p className="p-0 m-0 text-uppercase default-xs-font mb-2">
          {values.key}
        </p>
        <p className="default-xxs-font">{values.value}</p>
      </Col>
    );
  });

  return (
    <Container className="my-5 text-center " id="contact">
      <p className="default-md-font w-100 mt-5 pt-5">Contact</p>
      <Row>{contacts}</Row>
      <ContactForm />
    </Container>
  );
}

export default contact;
