import { MDBInput, MDBCol } from "mdb-react-ui-kit";
import React, { useContext } from "react";
import { registerContext } from "./Register";
const DateOfBirthComponent = () => {
  const { dateOfBirth, setDateOfBirth } = useContext(registerContext);
  return (
    <MDBCol col="6">
      <MDBInput
        className="form-control"
        id="formControlLg"
        required
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
        wrapperClass="mb-4"
        label="Date Of Birth"
        type="date"
        autoComplete="off"
      />
    </MDBCol>
  );
};

export default DateOfBirthComponent;
