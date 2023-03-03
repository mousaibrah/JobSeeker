import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit'
import NavLinks from "../navbar/NavLinks";

const Login = () => {
  return (
    <>
    <Top/>
<MDBContainer  className="p-3 my-5 h-custom">

<MDBRow>

  <MDBCol col='10' md='6'>
    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
  </MDBCol>

  <MDBCol col='4' md='6'>

    <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
    <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

    <div className="d-flex justify-content-between mb-4">
      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
      <a href="!#">Forgot password?</a>
    </div>

    <div className='text-center text-md-start mt-4 pt-2'>
      <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
      <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
    </div>

  </MDBCol>

</MDBRow>

<div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

  <div className="text-white mb-3 mb-md-0">
    Copyright © 2023. All rights reserved.
  </div>
  <div className="text-white mb-3 mb-md-0">
    JOB SEEKER
  </div>

</div>

</MDBContainer>
</>
  )
}
const Top = () => {
  const navigate = useNavigate();
  const loginL = (
    <NavDropdown.Item href="#action/3.4">
      <Nav.Link onClick={() => navigate("/login")}>Login</Nav.Link>
    </NavDropdown.Item>
  );
  const registerL = (
    <NavDropdown.Item href="#action/3.3">
      <Nav.Link onClick={() => navigate("/register")}>Register</Nav.Link>
    </NavDropdown.Item>
  );
  const profileL = (
    <NavDropdown.Item href="#action/3.1">
      <Nav.Link onClick={() => navigate("/profile")}>Profile</Nav.Link>
    </NavDropdown.Item>
  );
  const dashboardL = (
    <NavDropdown.Item href="#action/3.4">
      <Nav.Link onClick={() => navigate("/dashboard")}>Dashboard</Nav.Link>
    </NavDropdown.Item>
  );

  return <NavLinks home={{ loginL, registerL, profileL, dashboardL }} />;
};
export default Login