import { MDBInput } from "mdb-react-ui-kit";
import React, { useContext } from "react";
import { registerContext } from "./Register";
const EmailComponent = () => {
  const { setEmail, email } = useContext(registerContext);
  return (
    <>
      <MDBInput
        className="form-control"
        id="formControlLg"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        wrapperClass="mb-4"
        label="Email"
        type="email"
        title='Email Must Contain "@" And ".com"'
        autoComplete="off"
      />
    </>
  );
};

export default EmailComponent;
