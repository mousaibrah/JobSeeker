import { MDBBtn } from "mdb-react-ui-kit";
import React, { useContext } from "react";
import { Alert, Button } from "react-bootstrap";
import { registerContext } from "./Register";
const SubmitBtnComponent = () => {
  const { isRegistered, err, result, checkSubmit } =
    useContext(registerContext);
  return (
    <>
      <Button
        type="submit"
        onClick={checkSubmit}
        className="w-100 mb-4"
        size="md"
      >
        sign up
      </Button>
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
