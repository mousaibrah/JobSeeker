import React from "react";
import { useNavigate } from "react-router-dom";

import { Container, Nav, Navbar } from "react-bootstrap";
const NavLinks = ({ home }) => {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>
          JOB<span className="text-primary">SEEKER</span>
        </Navbar.Brand>
        <Nav className="me-auto">
          {home?.dashboardL}
          {home?.profileL}
          {home?.loginL}
          {home?.registerL}
          {home?.Logout}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavLinks;
