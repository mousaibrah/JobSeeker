import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

import axios from "axios";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import NavLinks from "../navbar/NavLinks";
import { userContext } from "../../App";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken, isLoggedIn, setIsLoggedIn, setUserId } =
    useContext(userContext);
  const [result, setResult] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [err, setErr] = useState(false);
  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5000/users/login", {
        email,
        password,
      });
      if (res.data.success) {
        setUserId(res.data.userId);
        setToken(res.data.token);
        localStorage.setItem("userId", JSON.stringify(res.data.userId));

        localStorage.setItem("token", JSON.stringify(res.data.token));
        if (rememberMe) {
          localStorage.setItem("logged", JSON.stringify(true));
        }
        setIsLoggedIn(true);
        setErr(false);
      } else {
      }
    } catch (error) {
      setResult(error.response.data.message);

      setErr(true);
    }
  };
  if (isLoggedIn) {
    setTimeout(() => {
      navigate("/dashboard");
    }, 3000);
  }
  return (
    <>
      <Top />
      <MDBContainer className="p-3 my-5 h-custom">
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </MDBCol>

          <MDBCol col="4" md="6">
            <MDBInput
              wrapperclass="mb-4"
              label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              id="formControlLg"
              type="email"
              size="lg"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              id="formControlLg"
              type="password"
              size="lg"
            />

            <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                checked={rememberMe}
                onChange={() => setRememberMe((prev) => !prev)}
                id="flexCheckDefault"
                label="Remember me"
              />
            </div>

            <div className="text-center text-md-start mt-4 pt-2">
              <MDBBtn onClick={login} className="mb-0 px-5" size="lg">
                Login
              </MDBBtn>
              {isLoggedIn && (
                <Alert key={"success"} variant="success">
                  Logged In Successfully
                </Alert>
              )}
              {err && (
                <Alert key={"danger"} variant="danger">
                  {result}
                </Alert>
              )}
              <p className="small fw-bold mt-2 pt-1 mb-2">
                Don't have an account?{" "}
                <Link to="/register" className="link-danger">
                  Register
                </Link>
              </p>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <br />
          <br />
          <br />
          <br />
          <br />
        </MDBRow>
      </MDBContainer>
    </>
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
export default Login;
