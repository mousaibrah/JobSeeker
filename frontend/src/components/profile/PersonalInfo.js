import {
  MDBCardText,
  MDBCol,
  MDBListGroupItem,
  MDBRow,
} from "mdb-react-ui-kit";
import React from "react";
export const PersonalBox = ({ info }) => {
  return (
    <MDBListGroupItem
      className="d-flex justify-content-between align-items-center p-3"
      style={{
        backgroundColor: "#2d2e37",
        borderBottom: "1px solid #0275d8",
        marginBottom: "4px",
      }}
    >
      <MDBCardText className="box-text" style={{ color: "#fcfeff" }}>
        {info.text}
      </MDBCardText>
      <MDBCardText className="text-muted">{info.value}</MDBCardText>
    </MDBListGroupItem>
  );
};
const PersonalInfo = ({ info }) => {
  const { text, item } = info;
  return (
    <MDBRow>
      <MDBCol sm="3">
        <MDBCardText style={{ color: "#fcfeff" }}>{text}</MDBCardText>
      </MDBCol>
      <MDBCol sm="9">
        <MDBCardText className="text-muted">{item}</MDBCardText>
      </MDBCol>
    </MDBRow>
  );
};

export default PersonalInfo;
