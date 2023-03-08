import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";

import { Box } from "../styled/Box.Styled";
import { Row } from "../styled/Row.Styled";
import { Col } from "../styled/Column.Styled";
import { Img } from "../styled/Img.Styled";
import { PersonalBox } from "../profile/PersonalInfo";
const LeftNav = () => {
  return (
    <MDBCard className="mb-4" style={{backgroundColor:'#1e1e2a',border:'2px solid #fcfeff'}}>
    <MDBCardBody className="text-center">
      <MDBCardImage
        src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
        className="rounded-circle"
        style={{ width: "150px" }}
        fluid
      />
      <MDBListGroup className="rounded-3">
        <PersonalBox info={{ text: "Name :", value: "Mousa Ibrahim" }} />
        <PersonalBox info={{ text: "Education :", value: "Meraki Academe" }} />
        <PersonalBox info={{ text: "Location :", value: "Jordan/Amman" }} />
        <PersonalBox
          info={{ text: "Years Of Experience :", value: "3 Years" }}
        />
        <hr />
        <MDBListGroupItem
          className="d-flex justify-content-between align-items-center p-3"
          style={{
            backgroundColor: "#1e1e2a",
            borderBottom: "1px solid #fcfeff",
            marginBottom: "4px",
            
          }}
        >
          <MDBCardText className="text-social" style={{ color: "#fcfeff",}}>Social Media</MDBCardText>
        </MDBListGroupItem>
        <MDBListGroupItem
          className="d-flex justify-content-between align-items-center p-3"
          style={{
            backgroundColor: "#1e1e2a",
            borderBottom: "1px solid #0275d8",
            marginBottom: "4px",
          }}
        >
          <MDBCardText className="box-text" style={{ color: "#fcfeff", }}>FaceBook </MDBCardText>
        </MDBListGroupItem>
        <MDBListGroupItem
          className="d-flex justify-content-between align-items-center p-3"
          style={{
            backgroundColor: "#1e1e2a",
            borderBottom: "1px solid #0275d8",
            marginBottom: "4px",
          }}
        >
          <MDBCardText className="box-text" style={{ color: "#fcfeff" }}>GitHub</MDBCardText>
        </MDBListGroupItem>
      </MDBListGroup>
    </MDBCardBody>
    </MDBCard>
  );
};

export default LeftNav;
/* 
<Box>
      <Row>
        <Col>
          <Img
            className="user-img-sidebar"
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
          />
        </Col>
        <Col>
          <MDBCardText variant="dark">UserName</MDBCardText>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>Location :</Col>
        <Col>Experience :</Col>
      </Row>
      <hr />
      <Row>
        <Row>Years Of Experience</Row>
      </Row>
      <Row>
        <h3>Social Accounts</h3>
        <hr />
        <p>facebook</p>
        <p>github</p>
      </Row>
    </Box>

*/
