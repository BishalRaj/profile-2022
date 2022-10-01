import React from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";

function skills() {
  var skills = [];
  for (let index = 0; index < 6; index++) {
    var now = randomNumber(0, 100);

    skills.push(
      <Col lg={6} md={6} sm={12} xs={12} className="mb-4" key={index}>
        <div className="w-100">
          <p className="mx-0 my-1 default-xs-font w-100">
            <span className="w-25">Node.JS</span>
            {/* <span className="w-25">{now}%</span> */}
          </p>
        </div>
        <div className="w-100">
          <ProgressBar now={now} 
          // label={`${now}%`} 
          variant="warning" srOnly />
        </div>
      </Col>
    );
  }
  return (
    <Container className="my-5" id="skill">
      <p className="default-md-font w-100 text-center mt-5 pt-5">Skills</p>
      <Row>{skills}</Row>
    </Container>
  );
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default skills;
