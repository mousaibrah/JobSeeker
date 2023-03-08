import React from "react";
import { useNavigate } from "react-router-dom";
import NavLinks from "../navbar/NavLinks";
import {Link} from '../styled/Links'
const HomeNav = () => {
  const navigate = useNavigate();
  const loginL = <Link onClick={() => navigate("/login")}>Login</Link>;
  const registerL = (
    <Link onClick={() => navigate("/register")}>Register</Link>
  );
  const profileL = (
    <Link onClick={() => navigate("/profile")}>Profile</Link>
  );
  const dashboardL = (
    <Link onClick={() => navigate("/dashboard")}>Dashboard</Link>
  );

  return <NavLinks home={{ loginL, registerL, profileL, dashboardL }} />;
};

export default HomeNav;
