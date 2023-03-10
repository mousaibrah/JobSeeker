import { MDBCardText, MDBListGroupItem } from "mdb-react-ui-kit";
import { v4 } from "uuid";
import React from "react";

const ProfileSkills = ({ data }) => {
  const skills = data.map((skill) => {
    return (
      <MDBListGroupItem
        style={{ backgroundColor: "#2d2e37", border: "1px solid #fcfeff" }}
        key={v4()}
        className="d-flex justify-content-between align-items-center p-3"
      >
        <MDBCardText style={{ color: "#fcfeff" }}>{skill}</MDBCardText>
      </MDBListGroupItem>
    );
  });
  return <>{skills}</>;
};

export default ProfileSkills;
