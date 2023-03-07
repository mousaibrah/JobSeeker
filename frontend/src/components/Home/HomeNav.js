import React from "react";
import { useNavigate } from "react-router-dom";
import NavLinks from "../navbar/NavLinks";
import { Nav, NavDropdown } from "react-bootstrap";

const HomeNav = () => {
  const navigate = useNavigate();
  const loginL = (
      <Nav.Link onClick={() => navigate("/login")}>Login</Nav.Link>
  );
  const registerL = (
      <Nav.Link onClick={() => navigate("/register")}>Register</Nav.Link>
  );
  const profileL = (
      <Nav.Link onClick={() => navigate("/profile")}>Profile</Nav.Link>
  );
  const dashboardL = (
      <Nav.Link onClick={() => navigate("/dashboard")}>Dashboard</Nav.Link>
  );

  return <NavLinks home={{ loginL, registerL, profileL, dashboardL }} />;
};

export default HomeNav;
