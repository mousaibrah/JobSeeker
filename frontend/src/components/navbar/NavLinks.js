import React from "react";
import { useNavigate,Link } from "react-router-dom";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
const NavLinks = ({ home }) => {
  const navigate = useNavigate();
  
  return (
    <Navbar bg="dark">
      <Container>
       
          <Link to='/'  style={{ fontWeight: "500", fontSize: "30px", color: "#fff" }}>JOB<span className="text-primary">SEEKER</span>{" "}</Link>
           
        <NavDropdown
          style={{ color: "#fff" }}
          title="Options"
          id="basic-nav-dropdown"
        >
          {home?.dashboardL}
          {home?.profileL}

          {home?.loginL}
          {home?.registerL}
          {home?.Logout}
        </NavDropdown>
      </Container>
    </Navbar>
  );
};

{
  /*  <NavDropdown.Divider /> */
}
export default NavLinks;
