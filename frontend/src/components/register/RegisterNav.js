import React from "react";
import { Link } from "../styled/Links";
import { useNavigate } from "react-router-dom";
import NavLinks from "../navbar/NavLinks";

const RegisterNav = () => {
  const navigate = useNavigate();
  const loginL = <Link onClick={() => navigate("/login")}>Login</Link>;

  const profileL = (
    <Link onClick={() => navigate("/profile")}>Profile</Link>
  );
  const dashboardL = (
    <Link onClick={() => navigate("/dashboard")}>Dashboard</Link>
  );

  return <NavLinks home={{ loginL, profileL, dashboardL }} />;
};
export default RegisterNav;
