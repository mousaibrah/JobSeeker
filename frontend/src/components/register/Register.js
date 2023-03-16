import React from "react";
import "./Style.css";
import FirstName from "./inputComponent/FirstName";

import LastName from "./inputComponent/LastName";
import Mobile from "./inputComponent/Mobile";
import Email from "./inputComponent/Email";
import Password from "./inputComponent/Password";
import { Container } from "../styled/Container.Styled";
import { Row } from "../styled/Row.Styled";
import { Col } from "../styled/Column.Styled";
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
        <Col className="Register-Col">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="img-fluid"
            id="register-img"
            alt="Phone"
          />
        </Col>
        <Col className="Register-Col"> 
          <Row>
            <MDBCol>
              {" "}
              <FirstName />
            </MDBCol>
            <MDBCol>
              <LastName />
            </MDBCol>
          </Row>
          <Row>
            <MDBCol>
              {" "}
              <Mobile />
            </MDBCol>
            <MDBCol>
              <Location />
            </MDBCol>
          </Row>
          <Date />
          <Email />
          <Password />
          <Img />
          <Role />
          <Row>
            <SubmitBtn />
          </Row>
          <Row>
            <Google />
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default Register;
