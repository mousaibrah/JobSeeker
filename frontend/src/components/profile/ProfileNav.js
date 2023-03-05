import React from "react";
import { useNavigate } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import NavLinks from "../navbar/NavLinks";
const ProfileNav = () => {
  const navigate = useNavigate();

  const registerL = (
    <NavDropdown.Item href="#action/3.3">
      <Nav.Link onClick={() => navigate("/register")}>Register</Nav.Link>
    </NavDropdown.Item>
  );

  const dashboardL = (
    <NavDropdown.Item href="#action/3.4">
      <Nav.Link onClick={() => navigate("/dashboard")}>Dashboard</Nav.Link>
    </NavDropdown.Item>
  );
  const Logout = (
    <NavDropdown.Item href="#action/3.1">
      <Nav.Link onClick={() => navigate("/logout")}>Logout</Nav.Link>
    </NavDropdown.Item>
  );

  return <NavLinks home={{ registerL, Logout, dashboardL }} />;
};

export default ProfileNav;
