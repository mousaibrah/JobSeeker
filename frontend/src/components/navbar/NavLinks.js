import React from "react";
import { useNavigate} from "react-router-dom";

import { Container, Nav, Navbar,NavDropdown  } from "react-bootstrap";
const NavLinks = ({ home }) => {
  const navigate = useNavigate()
  return (
    <Navbar bg="dark">
      <Container>
      <Navbar.Brand  href="http://localhost:3000/" style={{fontWeight:'500',fontSize:'30px',color:'#fff'}}>JOB<span style={{backgroundImage:'linear-gradient(to left , #2700b2,#000)',borderRadius:'14px'}}>SEEKER</span> </Navbar.Brand>
     <NavDropdown style={{color:'#fff'}} title="Options" id="basic-nav-dropdown">
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

{/*  <NavDropdown.Divider /> */}
export default NavLinks;
