import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import NavLinks from "../navbar/NavLinks";
import { userContext } from "../../App";
const ProfileNav = () => {
  const navigate = useNavigate();
  const { setUserId, setToken, setIsLoggedIn } = useContext(userContext);
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
      <Nav.Link
        onClick={() => {
          setToken(null);
          setUserId(null);
          setIsLoggedIn(false);
          navigate("/");
        }}
      >
        Logout
      </Nav.Link>
    </NavDropdown.Item>
  );

  return <NavLinks home={{ registerL, Logout, dashboardL }} />;
};

export default ProfileNav;
