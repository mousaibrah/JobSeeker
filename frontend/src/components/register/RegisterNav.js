import React from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Link } from "../styled/Links";
import NavLinks from "../navbar/NavLinks";
const RegisterNav = () => {
  const navigate = useNavigate();

  const loginL = <Link onClick={() => navigate("/login")}>Login</Link>;
  const feed = (
    <Link onClick={() => navigate("/feed")}>Feed</Link>
  );

  return <NavLinks home={{ loginL, feed }} />;
};

export default RegisterNav;
