import React, { useContext } from "react";
import Input from "../Input/Input";
import { registerContext } from "./Register";
const Email = () => {
  const { setNewUserData, newUserData, error } = useContext(registerContext);
  const setDataFunc = (value) => {
    setNewUserData({ ...newUserData, email: value });
  };
  return (
    <div>
      <Input
        compName={"email"}
        isRequired={error.email.isRequired}
        func={setDataFunc}
        label={"Email Address"}
        type={"email"}
      />
    </div>
  );
};

export default Email;
