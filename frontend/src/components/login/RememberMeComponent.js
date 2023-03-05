import React, { useContext } from "react";
import { MDBCheckbox } from "mdb-react-ui-kit";
import { loginContext } from "./Login";
const RememberMeComponent = () => {
  const { rememberMe, setRememberMe } = useContext(loginContext);

  return (
    <div className="d-flex justify-content-between mb-4">
      <MDBCheckbox
        name="flexCheck"
        value=""
        checked={rememberMe}
        onChange={() => setRememberMe((prev) => !prev)}
        id="flexCheckDefault"
        label="Remember me"
      />
    </div>
  );
};

export default RememberMeComponent;
