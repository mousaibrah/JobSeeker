import React from "react";
import { useNavigate } from "react-router-dom";
import NavLinks from "../navbar/NavLinks";
import { Button } from "../styled/Button.Styled";
import { Footer } from "../styled/Footer.Styled";
import { Link } from "../styled/Links";
import imgPath from "./404.jpg";
const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <ErrorNav />
      <div className="Error">
      <Button onClick={() => navigate("/")}>Go Home</Button>
      <img src={`${imgPath}`} />
      </div>
    </>
  );
};
const ErrorNav = () => {
  const navigate = useNavigate();
  const loginL = <Link onClick={() => navigate("/login")}>Login</Link>;
  const registerL = <Link onClick={() => navigate("/register")}>Register</Link>;
  const feed = <Link onClick={() => navigate("/feed")}>Feed</Link>;

  return <NavLinks home={{ loginL, registerL, feed }} />;
};
export default Error;
