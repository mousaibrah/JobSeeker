import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { PersonalBox } from "../profile/PersonalInfo";
const LeftNav = ({ personalInfo }) => {
  const {
    userImg,
    UserName,
    about,
    expertise,
    skills,
    education,
    email,
    mobile,
  } = personalInfo;
  console.log("personalInfo :>> ", personalInfo);
  return (
    <MDBCard
      className="mb-4"
      style={{ backgroundColor: "#1e1e2a", border: "2px solid #fcfeff" }}
    >
      <MDBCardBody className="text-center">
        <MDBCardImage
          src={userImg}
          className="rounded-circle"
          style={{ width: "150px" }}
          fluid
        />
        <MDBListGroup className="rounded-3">
          <PersonalBox info={{ text: "Name :", value: UserName }} />
          <PersonalBox info={{ text: "Education :", value: education }} />
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
            <MDBCardText className="text-social" style={{ color: "#fcfeff" }}>
              Social Media
            </MDBCardText>
          </MDBListGroupItem>
          <MDBListGroupItem
            className="d-flex justify-content-between align-items-center p-3"
            style={{
              backgroundColor: "#1e1e2a",
              borderBottom: "1px solid #0275d8",
              marginBottom: "4px",
            }}
          >
            <MDBCardText className="box-text" style={{ color: "#fcfeff" }}>
              FaceBook{" "}
            </MDBCardText>
            <MDBCardText className="box-text" style={{ color: "#fcfeff" }}>
              personal Account
            </MDBCardText>
          </MDBListGroupItem>
          <MDBListGroupItem
            className="d-flex justify-content-between align-items-center p-3"
            style={{
              backgroundColor: "#1e1e2a",
              borderBottom: "1px solid #0275d8",
              marginBottom: "4px",
            }}
          >
            <MDBCardText className="box-text" style={{ color: "#fcfeff" }}>
              GitHub
            </MDBCardText>
            <MDBCardText className="box-text" style={{ color: "#fcfeff" }}>
              personal Account
            </MDBCardText>
          </MDBListGroupItem>
        </MDBListGroup>
      </MDBCardBody>
    </MDBCard>
  );
};

export default LeftNav;
