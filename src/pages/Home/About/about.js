import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import logo from "../../../images/one.png";

function cvClicked() {
  const url =
    "https://public.tableau.com/profile/bishal6012#!/vizhome/PersonalCV/A4CV";
  window.open(url, "_blank");
}

function about() {
  var aboutInfo = [];

  var data = [
    { key: "Name:", value: "Bishal Raj Shakya" },
    { key: "Date of birth:", value: "February 28, 1998" },
    { key: "Address:", value: "Bungamati, Lalitpur, Nepal" },
    { key: "Zip code:", value: "44700" },
    { key: "Email:", value: "bisal1shakya@gmail.com" },
    { key: "Phone:", value: "+977-9843219471" },
  ];

  var key = 1;
  data.forEach((result) => {
    aboutInfo.push(
      <li className="d-flex my-2" key={key}>
        <span className="default-xs-font default-color-secondary text-start w-25">
          {result.key}
        </span>
        <span className="w-75 text-start default-color-primary">
          {result.value}
        </span>
      </li>
    );
    key++;
  });

  return (
    <Container className="mb-5" id="about">
      <Row>
        <Col
          lg={6}
          md={6}
          sm={0}
          xs={0}
          className="d-flex flex-wrap align-items-center justify-content-center sm-d-none"
        >
          <Image src={logo} className="w-100 my-auto profile-img" />
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <div className="w-100 text-start font-weight-bold default-md-font">
            About Me
          </div>

          <p className="mb-4 mt-1">
            A small river named Bishal flows by their place and supplies it with
            the necessary regelialia.
          </p>

          <ul style={{ listStyle: "none" }} className="p-0">
            {aboutInfo}
          </ul>

          <p className="default-xs-font w-100" style={{ fontSize: "25px" }}>
            <span className="default-color-primary">5</span> Project complete
          </p>
          <Button
            variant="warning"
            className="btn-rounded px-4 py-2"
            onClick={() => cvClicked()}
          >
            <strong>VIEW CV</strong>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
export default about;
