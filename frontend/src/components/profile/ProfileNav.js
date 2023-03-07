import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import NavLinks from "../navbar/NavLinks";
import { userContext } from "../../App";
const ProfileNav = () => {
  const navigate = useNavigate();
  const { setUserId, setToken, setIsLoggedIn } = useContext(userContext);

  const dashboardL = (
    <Nav.Link onClick={() => navigate("/dashboard")}>Dashboard</Nav.Link>
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

  return <NavLinks home={{ Logout, dashboardL }} />;
};

export default ProfileNav;
