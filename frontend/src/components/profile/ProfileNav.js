import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "../styled/Links";
import NavLinks from "../navbar/NavLinks";
import { AppContext } from "../State/AppState";
const ProfileNav = () => {
  const navigate = useNavigate();
  const { setUserId, setToken, setIsLoggedIn } = useContext(AppContext);

  const feed = (
    <Link onClick={() => navigate("/feed")}>Feed</Link>
  );
  const Logout = (
    <Link
      onClick={() => {
        setToken(null);
        setUserId(null);
        setIsLoggedIn(false);
        localStorage.clear();
        navigate("/");
      }}
    >
      Logout
    </Link>
  );

  return <NavLinks home={{ Logout, feed }} />;
};

export default ProfileNav;
