import { MDBInput, MDBCol } from "mdb-react-ui-kit";
import React, { useContext } from "react";
import {registerContext} from "./Register";
const PhoneNumberComponent = () => {
  const { newUserData, setNewUserData } = useContext(registerContext);
  return (
    <MDBCol col="6">
      <MDBInput
        className="form-control"
        id="formControlLg"
        required
        value={newUserData.phoneNumber}
        onChange={(e) => setNewUserData({...newUserData,phoneNumber: e.target.value})}
        wrapperClass="mb-4"
        label="Phone Number"
        type="tel"
        autoComplete="off"
      />
    </MDBCol>
  );
};

export default PhoneNumberComponent;
