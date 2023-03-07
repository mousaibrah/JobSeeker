import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavLinks from "../navbar/NavLinks";

const RegisterNav = () => {
  const navigate = useNavigate();
  const loginL = (
      <Nav.Link onClick={()=>navigate("/login")}>Login</Nav.Link>
  );

  const profileL = (
      <Nav.Link onClick={()=>navigate("/profile")}>Profile</Nav.Link>
  );
  const dashboardL = (
      <Nav.Link onClick={()=>navigate("/dashboard")}>Dashboard</Nav.Link>
  );

  return <NavLinks home={{ loginL, profileL, dashboardL }} />;
};
export default RegisterNav;
