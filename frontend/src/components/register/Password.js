import React, { useContext, useState } from "react";
import { Alert } from "react-bootstrap";
import Input from "../Input/Input";
import { registerContext } from "./Register";
const Password = () => {
  const { newUserData, setNewUserData, error, setShowMessage, showMessage } =
    useContext(registerContext);
  const [containUpperCase, setContainUpperCase] = useState(false);
  const [containNumber, setContainNumber] = useState(false);
  const [containEight, setContainEight] = useState(false);
  const setDataFunc = (value) => {
    setNewUserData({ ...newUserData, password: value });
    setShowMessage(true);
    if (/(?=.*[A-Z])/gs.test(value)) {
      setContainUpperCase(true);
    } else {
      setContainUpperCase(false);
    }
    if (/(?=.*[0-9])/gs.test(value)) {
      setContainNumber(true);
    } else {
      setContainNumber(false);
    }
    if (value.length >= 8) {
      setContainEight(true);
    } else {
      setContainEight(false);
    }
  };
  return (
    <>
      <Input
      
        compName={"password"}
        isRequired={error.password.isRequired}
        func={setDataFunc}
        label={"Password"}
        type={"password"}
      />
      {showMessage && (
        <>
          {!containUpperCase && (
            <Alert variant="warning">
              The Password must contain at least 1 uppercase alphabetical
              character
            </Alert>
          )}
          {!containEight && (
            <Alert variant="warning">
              The Password must be eight characters or longer
            </Alert>
          )}
          {!containNumber && (
            <Alert variant="warning">
              The Password must contain at least 1 numeric character
            </Alert>
          )}
        </>
      )}
    </>
  );
};

export default Password;
