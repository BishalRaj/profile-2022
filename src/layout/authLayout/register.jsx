import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Academic from "../../components/multistep-form/forms/academic";
import Experience from "../../components/multistep-form/forms/experience";
import Personal from "../../components/multistep-form/forms/personal";
import Skill from "../../components/multistep-form/forms/skill";
import Social from "../../components/multistep-form/forms/social";
import Progressbar from "../../components/multistep-form/progressbar";

const Register = () => {
    const [step, setstep] = useState(1);
    const [personal, setpersonal] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        address: "",
        phone: "",
        // role: "",
        // experience: "",
    });
    const [academic, setacademic] = useState([]);
    // eslint-disable-next-line
    const [experience, setexperience] = useState([]);
    // eslint-disable-next-line
    const [skills, setskills] = useState([]);
    const [isValid, setisValid] = useState(true);

    const decreaseStep = () => {
        if (step > 1 && step <= 6) {
            setstep(step - 1);
        } else return;
    };

    const validate = () => {
        // let isValid = true;
        let {
            name,
            email,
            password,
            confirmPassword,
            address,
            phone,
            // role,
            // experience,
        } = personal;

        switch (step) {
            case 1:
                if (
                    name &&
                    email &&
                    password &&
                    confirmPassword &&
                    address &&
                    phone 
                    // &&
                    // role &&
                    // experience
                ) {
                    console.log("====================================");
                    console.log(true);
                    console.log("====================================");
                    setisValid(true);

                    setstep(step + 1);
                } else {
                    console.log("====================================");
                    console.log(false);
                    console.log("====================================");
                    // setisValid(false);

                    // uncomment above and comment below code later
                    setisValid(true);
                    setstep(step + 1);
                }
                break;
            case 2:
                if (academic || academic.length || academic.length > 0) {
                    // isValid = true;

                    setstep(step + 1);
                }

                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            default:
                return;
        }

        // if (step > 0 && step < 5 && isValid) {
        //   setstep(step + 1);
        // } else return;
    };

    const handleChange = (event) => {
        switch (step) {
            case 1:
                setpersonal({ ...personal, [event.target.name]: event.target.value });
                break;
            case 5:
                break;
            default:
                return;
        }
    };

    const fetchData = (data) => {
        switch (step) {
            case 2:
                setacademic(data[0]);
                break;
            case 3:
                setexperience(data[0]);
                break;
            case 4:
                setskills(data[0]);
                break;
            default:
                return;
        }
    };

    return (
        <>
            <Container>
                <Progressbar step={step} />
            </Container>
            <Container className="mb-5">
                <div className="px-5 py-3 shadow-lg rounded-3">
                    {/*  */}
                    {step === 1 && (
                        <Personal
                            handleChange={handleChange}
                            data={personal}
                            isValid={isValid}
                        />
                    )}
                    {step === 2 && <Academic fetchData={fetchData} />}
                    {step === 3 && <Experience fetchData={fetchData} />}
                    {step === 4 && <Skill fetchData={fetchData} />}
                    {step === 5 && <Social />}

                    {/*  */}
                    <div className="row border-top px-5 py-3 mt-3">
                        <div className="col-6">Step {step} of 5</div>
                        <div className="col-6">
                            {step === 5 ? (
                                <button
                                    className="btn btn-primary float-end mx-2"
                                    onClick={validate}
                                >
                                    Submit
                                </button>
                            ) : (
                                <button
                                    className="btn btn-primary float-end mx-2"
                                    onClick={validate}
                                >
                                    Next
                                </button>
                            )}
                            <button
                                className="btn btn-outline-dark float-end mx-2"
                                onClick={decreaseStep}
                            >
                                Previous
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Register;
