import { MDBCol, MDBInput } from "mdb-react-ui-kit";
import React, { useContext } from "react";
import { registerContext } from "./Register";
const LastNameComponent = () => {
  const { newUserData, setNewUserData } = useContext(registerContext);
  return (
    <MDBCol col="6">
      <p>Last name</p>
      <MDBInput
      // label="Last name"
        className="form-control"
        id="formControlLg"
        required
        value={newUserData.lastName}
        onChange={(e) => setNewUserData({...newUserData,lastName:e.target.value})}
        wrapperClass="mb-4"
        type="text"
        autoComplete="off"
      />
    </MDBCol>
  );
};

export default LastNameComponent;
