import React from "react";
import FirstName from "./inputComponent/FirstName";

import LastName from "./inputComponent/LastName";
import Mobile from "./inputComponent/Mobile";
import Email from "./inputComponent/Email";
import Password from "./inputComponent/Password";
import { Container } from "react-bootstrap";
import Date from "./inputComponent/Date";
import Location from "./inputComponent/Location";
import Img from "./inputComponent/Img";
import Role from "./inputComponent/Role";
import SubmitBtn from "./SubmitBtn";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import RegisterNav from "./RegisterNav";
import Google from "./inputComponent/Google";
const Register = () => {
  return (
    <>
      <RegisterNav />
      <Container className="register-page">
        <MDBRow>
          <MDBCol lg="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone"
            />
          </MDBCol>
          <MDBCol lg="6">
            <MDBRow>
              <MDBCol>
                {" "}
                <FirstName />
              </MDBCol>
              <MDBCol>
                <LastName />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                {" "}
                <Mobile />
              </MDBCol>
              <MDBCol>
                <Location />
              </MDBCol>
            </MDBRow>
            <Date />
            <Email />
            <Password />

            <Img />
            <Role />

            <MDBRow className="justify-content-md-center">
              <SubmitBtn />
            </MDBRow>

            <MDBRow className="justify-content-md-center">
              <Google />
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </Container>
    </>
  );
};

export default Register;
