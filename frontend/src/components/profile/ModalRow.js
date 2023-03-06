import React, { useContext } from "react";
import { MDBCardText, MDBCol, MDBRow } from "mdb-react-ui-kit";
import ProfileInput from "./ProfileInput";

const ModalRow = ({ text }) => {
  return (
    <MDBRow>
      <MDBCol col="6">
        <MDBCardText>{text}</MDBCardText>
      </MDBCol>
      <MDBCol col="6">
        <ProfileInput />
      </MDBCol>
    </MDBRow>
  );
};

export default ModalRow;
