import React, { useContext } from "react";
import { MDBInput } from "mdb-react-ui-kit";
import { loginContext } from "./Login";
const EmailComponent = () => {
  const { setEmail, email } = useContext(loginContext);
  return (
    <>
      <p>Email address</p>
      <MDBInput
        wrapperclass="mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        id="formControlLg 7"
        type="email"
        size="lg"
      />
    </>
  );
};

export default EmailComponent;
