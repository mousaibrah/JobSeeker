import React from "react";
import { useNavigate, Link } from "react-router-dom";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
const NavLinks = ({ home }) => {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={()=>navigate('/')}>JOB<span className="text-primary">SEEKER</span></Navbar.Brand>
          <Nav className="me-auto">
          {home?.dashboardL}
           {home?.profileL}
           {home?.loginL}
           {home?.registerL}
           {home?.Logout}
          </Nav>
        </Container>
      </Navbar>
    // <Navbar bg="dark">
    //   <Container>

    //     <Navbar.Brand
    //       to="/"
    //       style={{ fontWeight: "500", fontSize: "30px", color: "#fff" }}
    //     >
    //       JOB<span className="text-primary">SEEKER</span>{" "}
    //     </Navbar.Brand>

    //     <Nav>
    //       {home?.dashboardL}
    //       {home?.profileL}

    //       {home?.loginL}
    //       {home?.registerL}
    //       {home?.Logout}
    //     </Nav>
    //   </Container>
    // </Navbar>
  );
};

{
  /*  <NavDropdown.Divider /> */
}
export default NavLinks;
