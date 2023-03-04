import { MDBCol, MDBInput } from "mdb-react-ui-kit";
import React, { useContext } from "react";
import { registerContext } from "./Register";
const FirstNameComponent = () => {
  const { setNewUserData, newUserData } = useContext(registerContext);
  return (
    <MDBCol col="6">
      <MDBInput
        className="form-control"
        id="validationDefault01"
        required
        value={newUserData.firstName}
        onChange={(e) => setNewUserData({...newUserData,firstName:e.target.value})}
        wrapperClass="mb-4"
        label="First name"
        type="text"
        autoComplete="off"
      />
      {/* {error.firstName.isError ? <p>{error.firstName.errorMessage}</p> : ""} */}
    </MDBCol>
  );
};

export default FirstNameComponent;
