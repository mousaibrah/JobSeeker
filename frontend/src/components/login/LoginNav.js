import React from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Link } from "../styled/Links";
import NavLinks from "../navbar/NavLinks";
const LoginNav = () => {
  const navigate = useNavigate();

  const registerL = <Link onClick={() => navigate("/register")}>Register</Link>;
  const feed = (
    <Link onClick={() => navigate("/feed")}>Feed</Link>
  );

  return <NavLinks home={{ registerL, feed }} />;
};

export default LoginNav;
