import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBListGroup,
} from "mdb-react-ui-kit";
import { PersonalBox } from "../profile/PersonalInfo";

const LeftNav = () => {
  const userId = localStorage.getItem("userId");
  const [personalInfo, setPersonalInfo] = useState({});

  const { userImg, UserName, education, location } = personalInfo;
  useEffect(() => {
    getPersonalInfo();
  }, []);
  const getPersonalInfo = async () => {
    try {
      const personalInfo = await axios.get(
        `http://localhost:5000/profile/${JSON.parse(userId)}`
      );
      const { userImg, UserName, education, location } = personalInfo.data.data;
      setPersonalInfo({ userImg, UserName, education, location });
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
        </MDBListGroup>
      </MDBCardBody>
    </MDBCard>
  );
};

export default LeftNav;
