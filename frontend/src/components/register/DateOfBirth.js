import { MDBCol } from "mdb-react-ui-kit";
import React, { useContext } from "react";
import Input from "../Input/Input";
import { registerContext } from "./Register";
const DateOfBirth = () => {
  const { newUserData, setNewUserData, error } = useContext(registerContext);
  const setDataFunc = (value) => {
    setNewUserData({ ...newUserData, dateOfBirth: value });
  };

  return (
    <MDBCol col="6">
      <Input
        compName={"dateOfBirth"}
        isRequired={error.dateOfBirth.isRequired}
        func={setDataFunc}
        label={"Date Of Birth"}
        type={"date"}
      />
    </MDBCol>
  );
};

export default DateOfBirth;
