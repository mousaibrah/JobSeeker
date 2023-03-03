import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import NavLinks from "../navbar/NavLinks";
import { Nav, NavDropdown } from "react-bootstrap";
import { MDBIcon } from "mdbreact";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBValidation,
  MDBCardImage,
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
        navigate("/login");
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
      <MDBContainer className="p-3 my-5 h-custom">
        <MDBRow>
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" />
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
                        autocomplete="off"
                      />
                    </MDBCol>

                    <MDBCol col="6">
                      <MDBInput
                        className="form-control"
                        id="formControlLg"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        wrapperClass="mb-4"
                        label="Last name"
                        type="text"
                        autocomplete="off"
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol col="6">
                      <MDBInput
                        className="form-control"
                        id="formControlLg"
                        required
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        wrapperClass="mb-4"
                        label="Date Of Birth"
                        type="date"
                        autocomplete="off"
                      />
                    </MDBCol>

                    <MDBCol col="6">
                      <MDBInput
                        className="form-control"
                        id="formControlLg"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        wrapperClass="mb-4"
                        label="Phone Number"
                        type="tel"
                        autocomplete="off"
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput
                    className="form-control"
                    id="formControlLg"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    wrapperClass="mb-4"
                    label="Email"
                    type="email"
                    title='Email Must Contain "@" And ".com"'
            

                    autocomplete="off"
                    />
                   
                  <MDBInput
                    className="form-control"
                    id="formControlLg"
                    required
                   
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                     
                    }}
                    title='Password Must Contain 8 Letter At Least'
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
                      <b>
                        <> </>
                        <> </>
                        <> </>Google
                      </b>
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
