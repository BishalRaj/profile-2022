import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { AiTwotoneDelete, AiOutlineEdit } from "react-icons/ai";
function Resume(props) {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   setData(props.resume);
  // }, [props]);

  return props.resume ? (
    <Container className={props.admin ? "my-1" : "my-5"} id="resume">
      {props.admin ? (
        ""
      ) : (
        <p className="default-md-font w-100 text-center mt-5 pt-5">Resume</p>
      )}
      <Row>
        {props.resume.length > 0 || props.resume.length !== undefined
          ? props.resume.map((item, index) => {
              return (
                <Col
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                  className="mb-4 "
                  key={index}
                >
                  <div className="mx-auto p-4 default-bg-color-secondary rounded">
                    <p className="default-sm-font m-0 default-color-primary">
                      {item.from} - {item.to}
                    </p>
                    <p className="default-sm-font m-0 default-color-secondary">
                      {item.degree}
                    </p>
                    <p className="letter-spacing-2">{item.university}</p>
                    <p className="default-color-tertiary">{item.description}</p>

                    {props.admin ? (
                      <div className="align-items-center justify-content-center w-100">
                        <button
                          className=" mx-1 btn btn-warning shadow-lg  "
                          onClick={() => props.populateUpdateData(item, index)}
                        >
                          Edit
                          <AiOutlineEdit color="black" size="25px" />
                        </button>
                        <button className=" mx-1 btn btn-danger">
                          Remove
                          <AiTwotoneDelete color="white" size="25px" />
                        </button>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </Col>
              );
            })
          : ""}
      </Row>
    </Container>
  ) : (
    ""
  );
}

function mapStateToProps(state) {
  return {
    resume: state.resume.resume,
    admin: state.auth.admin,
  };
}

export default connect(mapStateToProps)(Resume);
