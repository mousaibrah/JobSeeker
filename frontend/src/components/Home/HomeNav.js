import React from "react";
import { useNavigate } from "react-router-dom";
import NavLinks from "../navbar/NavLinks";
import { Nav, NavDropdown } from "react-bootstrap";

const HomeNav = () => {
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

export default HomeNav;
