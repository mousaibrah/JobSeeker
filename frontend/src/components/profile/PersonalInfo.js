import {
  MDBCardText,
  MDBCol,
  MDBListGroupItem,
  MDBRow,
} from "mdb-react-ui-kit";
import React from "react";
export const PersonalBox = ({ info }) => {
  return (
    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
      <MDBCardText className="text-dark">{info.text}</MDBCardText>
      <MDBCardText>{info.value}</MDBCardText>
    </MDBListGroupItem>
  );
};
const PersonalInfo = ({ info }) => {
  const { text, item } = info;
  return (
    <MDBRow>
      <MDBCol sm="3">
        <MDBCardText className="text-dark">{text}</MDBCardText>
      </MDBCol>
      <MDBCol sm="9">
        <MDBCardText className="text-muted">{item}</MDBCardText>
      </MDBCol>
    </MDBRow>
  );
};

export default PersonalInfo;
