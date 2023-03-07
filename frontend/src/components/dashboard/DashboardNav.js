import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import NavLinks from "../navbar/NavLinks";
import { userContext } from "../../App";
const DashboardNav = () => {
  const navigate = useNavigate();
  const { setUserId, setToken, setIsLoggedIn } = useContext(userContext);
  const profileL = (
      <Nav.Link onClick={()=>navigate("/profile")}>Profile</Nav.Link>
  );

 
  const Logout = (
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
  );

  return <NavLinks home={{ profileL, Logout }} />;
};

export default DashboardNav;
