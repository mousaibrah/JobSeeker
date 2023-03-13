import React from "react";
import { useNavigate } from "react-router-dom";
import NavLinks from "../navbar/NavLinks";
import { Nav, NavDropdown, Container } from "react-bootstrap";
import { Button } from "../styled/Button.Styled";
import { Link } from "../styled/Links";
import imgPath from './404.jpg';
const Error = () => {
  const navigate = useNavigate();
  return (
    <Container fluid>
      <ErrorNav />
      <img
        src={`${imgPath}`}
       width={'100%'}
      />
      <Button onClick={() => navigate("/")}>Go Home</Button>
    </Container>
  );
};
const ErrorNav = () => {
  const navigate = useNavigate();
  const loginL = <Link onClick={() => navigate("/login")}>Login</Link>;
  const registerL = <Link onClick={() => navigate("/register")}>Register</Link>;
  const feed = (
    <Link onClick={() => navigate("/feed")}>Feed</Link>
  );

  return <NavLinks home={{ loginL, registerL, feed }} />;
};
export default Error;
