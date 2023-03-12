import React, { useContext } from "react";
import FirstName from "./inputComponent/FirstName";
import { RegisterContext } from "./Context/Context";
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
const Register = () => {
  return (
    <>
      <RegisterNav />
      <Container>
        <MDBRow>
          <MDBCol lg="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              class="img-fluid"
              alt="Phone image"
            />
          </MDBCol>
          <MDBCol lg="6">
            <FirstName />
            <LastName />
            <Mobile />
            <Email />
            <Password />
            <Date />
            <Location />
            <Img />
            <Role />
            <SubmitBtn />
          </MDBCol>
        </MDBRow>
      </Container>
    </>
  );
};

export default Register;
