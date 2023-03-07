import React, { useState } from "react";
import { MDBCardText, MDBCol, MDBInput, MDBRow } from "mdb-react-ui-kit";
import { v4 } from "uuid";
const ProfileInput = ({ input, onFunction }) => {
  const { title, initValue, isDisable } = input;
  return (
    <MDBRow>
      <MDBCol col="6">
        <MDBCardText>{title}</MDBCardText>
      </MDBCol>
      <MDBCol col="6">
        <MDBInput
          className="border-primary border border-3"
          id={`formControlDisabled ${v4()}`}
          value={initValue}
          onChange={(e) => {
            onFunction(e.target.value);
          }}
          type="text"
          disabled={isDisable}
        />
      </MDBCol>
    </MDBRow>
  );
};

export default ProfileInput;
