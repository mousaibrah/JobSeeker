import { MDBCardText, MDBListGroupItem } from "mdb-react-ui-kit";
import React from "react";

const ProfileSkills = ({ data }) => {
  const skills = data.map((skill) => {
    return (
      <MDBListGroupItem
        key={skill + "525"}
        className="d-flex justify-content-between align-items-center p-3"
      >
        <MDBCardText className="text-muted">{skill}</MDBCardText>
      </MDBListGroupItem>
    );
  });
  return <>{skills}</>;
};

export default ProfileSkills;
