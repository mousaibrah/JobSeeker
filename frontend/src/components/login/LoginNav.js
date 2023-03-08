import React from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Link } from "../styled/Links";
import NavLinks from "../navbar/NavLinks";
const LoginNav = () => {
  const navigate = useNavigate();

  const registerL = <Link onClick={() => navigate("/register")}>Register</Link>;
  const profileL = <Link onClick={() => navigate("/profile")}>Profile</Link>;
  const dashboardL = (
    <Link onClick={() => navigate("/dashboard")}>Dashboard</Link>
  );

  return <NavLinks home={{ registerL, profileL, dashboardL }} />;
};

export default LoginNav;
