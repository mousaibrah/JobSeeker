import { MDBBtn } from "mdb-react-ui-kit";
import React, { useContext } from "react";
import { Alert } from "react-bootstrap";
import { registerContext } from "./Register";
const SubmitBtnComponent = () => {
  const { isRegistered, err, result, checkSubmit } =
    useContext(registerContext);
  return (
    <>
      <MDBBtn
        type="submit"
        onClick={checkSubmit}
        className="w-100 mb-4"
        size="md"
      >
        sign up
      </MDBBtn>
      {isRegistered && (
        <Alert key={"success"} variant={"success"}>
          Account Created Successfully
        </Alert>
      )}
      {err && (
        <Alert key={"danger"} variant={"danger"}>
          {result}
        </Alert>
      )}
    </>
  );
};

export default SubmitBtnComponent;
