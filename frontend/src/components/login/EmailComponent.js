import React, { useContext } from "react";
import { MDBInput } from "mdb-react-ui-kit";
import { loginContext } from "./Login";
import { Label } from "../styled/Label.Styled";
import { Input } from "../styled/Input.Styled";
const EmailComponent = () => {
  const { setEmail, email } = useContext(loginContext);
  return (
    <>
      <Label>Email address</Label>
      <Input
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
