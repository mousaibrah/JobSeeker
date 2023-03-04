import React, { useContext } from "react";
import { MDBInput } from "mdb-react-ui-kit";
import { loginContext } from "./Login";
const PasswordComponent = () => {
  const { password, setPassword } = useContext(loginContext);

  return (
    <>
      <MDBInput
        wrapperClass="mb-4"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        id="formControlLg"
        type="password"
        size="lg"
      />
    </>
  );
};

export default PasswordComponent;
