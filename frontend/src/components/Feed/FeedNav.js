import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "../styled/Links";
import NavLinks from "../navbar/NavLinks";
import { AppContext } from "../State/AppState";
const FeedNav = () => {
  const navigate = useNavigate();
  const { setUserId, setToken, setIsLoggedIn } = useContext(AppContext);
  const logged = JSON.parse(localStorage.getItem("logged"));
  const profileL = <Link onClick={() => navigate("/profile")}>Profile</Link>;
  const loginL = <Link onClick={() => navigate("/login")}>Login</Link>;
  const registerL = <Link onClick={() => navigate("/register")}>Register</Link>;

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
  if (logged) {
    return <NavLinks home={{ profileL, Logout }} />;
  } else {
    return <NavLinks home={{ loginL, registerL }} />;
  }
};

export default FeedNav;
