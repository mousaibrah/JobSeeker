import React from "react";
import { useNavigate } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import NavLinks from "../navbar/NavLinks";
const LoginNav = () => {
  const navigate = useNavigate();

  const registerL = (
      <Nav.Link onClick={() => navigate("/register")}>Register</Nav.Link>
  );
  const profileL = (
      <Nav.Link onClick={() => navigate("/profile")}>Profile</Nav.Link>
  );
  const dashboardL = (
      <Nav.Link onClick={() => navigate("/dashboard")}>Dashboard</Nav.Link>
  );

  return <NavLinks home={{ registerL, profileL, dashboardL }} />;
};

export default LoginNav;
