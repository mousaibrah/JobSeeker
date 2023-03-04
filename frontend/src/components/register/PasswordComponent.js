import { MDBInput } from "mdb-react-ui-kit";
import React, { useContext } from "react";
import {registerContext} from "./Register";
const PasswordComponent = () => {
  const { password, setPassword } = useContext(registerContext);
  return (
    <>
      <MDBInput
        className="form-control"
        id="formControlLg"
        required
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        title="Password Must Contain 8 Letter At Least"
        wrapperClass="mb-4"
        label="Password"
        type="password"
      />
    </>
  );
};

export default PasswordComponent;
