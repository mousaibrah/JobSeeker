import React from "react";
import { useNavigate } from "react-router-dom";
import NavLinks from "../navbar/NavLinks";
import { Nav, NavDropdown, Container } from "react-bootstrap";
import { Button } from "../styled/Button.Styled";
import { Link } from "../styled/Links";
import imgPath from './404.jpg';
const Error = () => {
  const navigate = useNavigate();
  return (
    <Container fluid>
      <ErrorNav />
      <img
        src={`${imgPath}`}
       width={'100%'}
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
