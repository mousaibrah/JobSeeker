import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "../styled/Links";
import NavLinks from "../navbar/NavLinks";
import { AppContext } from "../State/AppState";
const AdminNav = () => {
  const navigate = useNavigate();
  const { setUserId, setToken, setIsLoggedIn } = useContext(AppContext);

  const profileL = <Link onClick={() => navigate("/profile")}>Profile</Link>;
  const feed = <Link onClick={() => navigate("/feed")}>Feed</Link>;
  const Logout = (
    <Link
      onClick={() => {
        setToken(null);
        setUserId(null);
        setIsLoggedIn(false);
        localStorage.removeItem("userId");
        localStorage.removeItem("role");
        localStorage.removeItem("token");
        localStorage.removeItem("logged");
        navigate("/");
      }}
    >
      Logout
    </Link>
  );
  return <NavLinks home={{ profileL, feed, Logout }} />;
};

export default AdminNav;
