import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "../styled/Links";
import NavLinks from "../navbar/NavLinks";
import { AppContext } from "../State/AppState";
const ProfileNav = () => {
  const navigate = useNavigate();
  const { setUserId, setToken, setIsLoggedIn } = useContext(AppContext);

  const dashboardL = (
    <Link onClick={() => navigate("/dashboard")}>Dashboard</Link>
  );
  const Logout = (
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
  );

  return <NavLinks home={{ Logout, dashboardL }} />;
};

export default ProfileNav;
