import React from "react";
import { useNavigate } from "react-router-dom";
import NavLinks from "../navbar/NavLinks";
import { Link } from "../styled/Links";
const HomeNav = () => {
  const navigate = useNavigate();
  const loginL = <Link onClick={() => navigate("/login")}>Login</Link>;
  const registerL = <Link onClick={() => navigate("/register")}>Register</Link>;
 ;
  const feed = (
    <Link onClick={() => navigate("/feed")}>Feed</Link>
  );

  return <NavLinks home={{ loginL, registerL, feed }} />;
};

export default HomeNav;
