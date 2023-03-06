import React, { useState } from "react";
import { MDBInput } from "mdb-react-ui-kit";
const ProfileInput = () => {
  const [someValue, setSomeValue] = useState("");
  return (
    <MDBInput
      className="border-primary border border-3"
      id="formControlDisabled"
      value={someValue}
      onChange={(e) => {
        setSomeValue(e.target.value);
      }}
      type="text"
      disabled={true}
    />
  );
};

export default ProfileInput;
