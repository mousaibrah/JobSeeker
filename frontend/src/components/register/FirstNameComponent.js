import { MDBCol, MDBInput } from "mdb-react-ui-kit";
import React, { useContext } from "react";
import { registerContext } from "./Register";
const FirstNameComponent = () => {
  const { setFirstName, firstName } = useContext(registerContext);
  return (
    <MDBCol col="6">
      <MDBInput
        className="form-control"
        id="validationDefault01"
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        wrapperClass="mb-4"
        label="First name"
        type="text"
        autoComplete="off"
      />
    </MDBCol>
  );
};

export default FirstNameComponent;
