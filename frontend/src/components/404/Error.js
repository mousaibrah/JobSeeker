import React from "react";
import { useNavigate } from "react-router-dom";
import NavLinks from "../navbar/NavLinks";
import { Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { Link } from "../styled/Links";
const Error = () => {
  const navigate = useNavigate();
  return (
    <Container fluid>
      <ErrorNav />
      <img
        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000"
        width={"720px"}
        height={"720px"}
      />
      <Button onClick={() => navigate("/")}>Go Home</Button>
    </Container>
  );
};
const ErrorNav = () => {
  const navigate = useNavigate();
  const loginL = <Link onClick={() => navigate("/login")}>Login</Link>;
  const registerL = <Link onClick={() => navigate("/register")}>Register</Link>;
  const profileL = <Link onClick={() => navigate("/profile")}>Profile</Link>;
  const dashboardL = (
    <Link onClick={() => navigate("/dashboard")}>Dashboard</Link>
  );

  return <NavLinks home={{ loginL, registerL, profileL, dashboardL }} />;
};
export default Error;
