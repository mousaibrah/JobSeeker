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
import RegisterNav from "./RegisterNav";
import Google from "./inputComponent/Google";
const Register = () => {
  return (
    <>
      <RegisterNav />
      <Container className="register-page">
        <Col className="Register-Col image-col">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="img-fluid"
            id="register-img"
            alt="Phone"
          />
        </Col>
        <Col className="Register-Col inputs-col">
          <Row gb="15px" className="name-row">
            <Col>
              {" "}
              <FirstName />
            </Col>
            <Col>
              <LastName />
            </Col>
          </Row>
          <Row gb="15px" className="name-row">
            <Col>
              {" "}
              <Mobile />
            </Col>
            <Col>
              <Location />
            </Col>
          </Row>
          <Date />
          <Email />
          <Password />
          <Img />
          <Row>
            <Role />
          </Row>
          <Row className="sub-btn-row">
            <SubmitBtn />
          </Row>
          <Row className="sub-btn-row">
            <Google />
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default Register;
