import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import NavLinks from "../navbar/NavLinks";
import { Nav, NavDropdown } from "react-bootstrap";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
  MDBValidation,
} from "mdb-react-ui-kit";
import axios from "axios";
const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("6400ff849df16b07a6ccc511");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [err, setErr] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const register = async () => {
    const newUser = {
      firstName,
      lastName,
      dateOfBirth,
      phoneNumber,
      email,
      password,
      role,
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/users/register",
        newUser
      );

      setResult(res.data.message);
      setIsRegistered(true);
      setTimeout(() => {
        setFirstName("");
        setLastName("");
        setDateOfBirth("");
        setPhoneNumber("");
        setEmail("");
        setErr(false);

        setPassword("");
        setIsRegistered(false);
        navigate("/");
      }, 3000);
    } catch (error) {
      setResult(error.response.data.message);
      console.log(error);
      setErr(true);
    }
  };
  const setRoles = (roleName) => {
    return setRole(roleName);
  };
  return (
    <div className="Register">
      <Top />
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol
            style={{
              backgroundImage: `url(${"https://www.tidio.com/_next/image/?url=https%3A%2F%2Fwww.tidio.com%2Fwp-content%2Fuploads%2Fwelcome-message-upadte.png&w=1920&q=75"})`,
            }}
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <h1 className="my-5 text-primary">Join Job Seekers Now</h1>

            <p className="px-3" style={{ color: "hsl(217, 10%, 50.8%)" }}>
              You Looking For Work On Your
            </p>
          </MDBCol>

          <MDBCol md="6">
            <MDBCard className="my-5">
              <MDBCardBody className="p-5">
                <MDBValidation className="row g-3" isValidated>
                  <MDBRow>
                    <MDBCol col="6">
                      <MDBInput
                        className="form-control"
                        id="validationDefault01"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        wrapperClass="mb-4"
                        label="First name"
                        type="text"
                      />
                    </MDBCol>

                    <MDBCol col="6">
                      <MDBInput
                        className="form-control"
                        id="validationDefault02"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        wrapperClass="mb-4"
                        label="Last name"
                        type="text"
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol col="6">
                      <MDBInput
                        className="form-control"
                        id="validationDefault03"
                        required
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        wrapperClass="mb-4"
                        label="Date Of Birth"
                        type="date"
                      />
                    </MDBCol>

                    <MDBCol col="6">
                      <MDBInput
                        className="form-control"
                        id="validationDefault04"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        wrapperClass="mb-4"
                        label="Phone Number"
                        type="tel"
                        autoComplete="false"
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput
                    className="form-control"
                    id="validationDefault05"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    wrapperClass="mb-4"
                    label="Email"
                    type="email"
                  />
                  <MDBInput
                    className="form-control"
                    id="validationDefault06"
                    required
                    value={password}
                    onFocus={e=>
                    console.log(e)
                    }
                    onChange={(e) => setPassword(e.target.value)}
                    wrapperClass="mb-4"
                    label="Password"
                    type="password"
                  />
                  
                  <MDBCheckbox
                    value="s"
                    label="COMPANY"
                    checked={isChecked}
                    onClick={() => {
                      setIsChecked(true);
                      setRoles("6400ff7b9df16b07a6ccc50f");
                    }}
                  />
                  <MDBCheckbox
                    value="ss"
                    checked={!isChecked}
                    onClick={() => {
                      setIsChecked(false);
                      setRoles("6400ff849df16b07a6ccc511");
                    }}
                    label="USER"
                  />

                  <MDBBtn
                    type="submit"
                    onClick={register}
                    className="w-100 mb-4"
                    size="md"
                  >
                    sign up
                  </MDBBtn>
                  {isRegistered && (
                    <Alert key={"success"} variant={"success"}>
                      Account Created Successfully
                    </Alert>
                  )}
                  {err && (
                    <Alert key={"danger"} variant={"danger"}>
                      {result}
                    </Alert>
                  )}

                  <div className="text-center">
                    <p>
                      Already Have An Account : <Link to="/login">Login</Link>
                    </p>
                    <br />
                    <p>or sign up with:</p>

                    <MDBBtn className="w-20 mb-4">
                      <MDBIcon fab icon="google" size="2xl" />
                      Google
                    </MDBBtn>
                  </div>
                </MDBValidation>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};
const Top = () => {
  const navigate = useNavigate();
  const loginL = (
    <NavDropdown.Item href="#action/3.4">
      <Nav.Link onClick={() => navigate("/login")}>Login</Nav.Link>
    </NavDropdown.Item>
  );
  const registerL = (
    <NavDropdown.Item href="#action/3.3">
      <Nav.Link onClick={() => navigate("/register")}>Register</Nav.Link>
    </NavDropdown.Item>
  );
  const profileL = (
    <NavDropdown.Item href="#action/3.1">
      <Nav.Link onClick={() => navigate("/profile")}>Profile</Nav.Link>
    </NavDropdown.Item>
  );
  const dashboardL = (
    <NavDropdown.Item href="#action/3.4">
      <Nav.Link onClick={() => navigate("/dashboard")}>Dashboard</Nav.Link>
    </NavDropdown.Item>
  );

  return <NavLinks home={{ loginL, registerL, profileL, dashboardL }} />;
};
export default Register;
