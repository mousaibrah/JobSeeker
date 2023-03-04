import { MDBCol, MDBInput } from "mdb-react-ui-kit";
import React, { useContext } from "react";
import { registerContext } from "./Register";
const LastNameComponent = () => {
  const { lastName, setLastName } = useContext(registerContext);
  return (
    <MDBCol col="6">
      <MDBInput
        className="form-control"
        id="formControlLg"
        required
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        wrapperClass="mb-4"
        label="Last name"
        type="text"
        autoComplete="off"
      />
    </MDBCol>
  );
};

export default LastNameComponent;
