import React, { useState } from "react";
import { MDBInput } from "mdb-react-ui-kit";
const ProfileInput = () => {
    const [someValue, setSomeValue] = useState('')
  return (
    <MDBInput
      className="form-control"
      id="formControlDisabled"
      value={someValue}
      onChange={(e) => {
        setSomeValue(e.target.value);
      }}
      wrapperClass="mb-4"
      type=""
      disabled={true}
    />
  );
};

export default ProfileInput;
