import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { useNavigate,Link } from "react-router-dom";
import NavLinks from "../navbar/NavLinks";

const RegisterNav = () => {
  const navigate = useNavigate();
  const loginL = (
    <NavDropdown.Item href="#action/3.4">
      <Link to="/login">Login</Link>
    </NavDropdown.Item>
  );

  const profileL = (
    <NavDropdown.Item href="#action/3.1">
      <Link to="/profile">Profile</Link>
    </NavDropdown.Item>
  );
  const dashboardL = (
    <NavDropdown.Item href="#action/3.4">
      <Link to="/dashboard">Dashboard</Link>
    </NavDropdown.Item>
  );

  return <NavLinks home={{ loginL, profileL, dashboardL }} />;
};
export default RegisterNav;
