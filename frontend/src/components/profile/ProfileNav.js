import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import NavLinks from "../navbar/NavLinks";
import { userContext } from "../../App";
const ProfileNav = () => {
  const navigate = useNavigate();
  const { setUserId, setToken, setIsLoggedIn } = useContext(userContext);
  const registerL = (
    <NavDropdown.Item href="#action/3.3">
      <Link to="/register">Register</Link>
    </NavDropdown.Item>
  );

  const dashboardL = (
    <NavDropdown.Item href="#action/3.4">
      <Link to="/dashboard">Dashboard</Link>
    </NavDropdown.Item>
  );
  const Logout = (
    <NavDropdown.Item href="#action/3.1">
      <Link
        onClick={() => {
          setToken(null);
          setUserId(null);
          setIsLoggedIn(false);
          navigate("/");
        }}
      >
        Logout
      </Link>
    </NavDropdown.Item>
  );

  return <NavLinks home={{ registerL, Logout, dashboardL }} />;
};

export default ProfileNav;
