import React, { useEffect, useState } from "react";
import axios from 'axios';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { PersonalBox } from "../profile/PersonalInfo";
const LeftNav = () => {
  const userId = localStorage.getItem("userId")
  const [personalInfo, setPersonalInfo] = useState({});
  const { userImg, UserName, education,location } = personalInfo;
  useEffect(() => {
    getPersonalInfo();
  }, []);
  const getPersonalInfo = async () => {
    try {
      const personalInfo = await axios.get(
        `http://localhost:5000/profile/${JSON.parse(userId)}`
      );
      const { userImg, UserName, education,location } = personalInfo.data.data;
      setPersonalInfo({ userImg, UserName, education,location });
    } catch (error) {
      console.log("error LN 21:>> ", error);
    }
  };
  return (
    <MDBCard
      className="mb-4"
      style={{ backgroundColor: "#2d2e37", border: "2px solid #fcfeff" }}
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
          <PersonalBox info={{ text: "Location :", value: location }} />
          <PersonalBox
            info={{ text: "Years Of Experience :", value: "3 Years" }}
          />
          <hr />
          <MDBListGroupItem
            className="d-flex justify-content-between align-items-center p-3"
            style={{
              backgroundColor: "#2d2e37",
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
              backgroundColor: "#2d2e37",
              borderBottom: "1px solid #0275d8",
              marginBottom: "4px",
            }}
          >
            <MDBCardText style={{ color: "#fcfeff" }}>FaceBook </MDBCardText>
            <MDBCardText className="box-text" style={{ color: "#fcfeff" }}>
              personal Account
            </MDBCardText>
          </MDBListGroupItem>
          <MDBListGroupItem
            className="d-flex justify-content-between align-items-center p-3"
            style={{
              backgroundColor: "#2d2e37",
              borderBottom: "1px solid #0275d8",
              marginBottom: "4px",
            }}
          >
            <MDBCardText style={{ color: "#fcfeff" }}>GitHub</MDBCardText>
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
