import React, { useContext } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCol,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

const ModalRow = ({text}) => {
  return (
    <MDBRow>
      <MDBCol col="6">
        <MDBCardText>{text}</MDBCardText>
      </MDBCol>
      <MDBCol col="6">
        <MDBInput />
      </MDBCol>
    </MDBRow>
  );
};

export default ModalRow;
