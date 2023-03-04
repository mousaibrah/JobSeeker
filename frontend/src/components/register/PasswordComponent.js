import { MDBInput } from "mdb-react-ui-kit";
import React, { useContext } from "react";
import Input from "../Input/Input";
import {registerContext} from "./Register";
const PasswordComponent = () => {
  const { newUserData, setNewUserData,error } = useContext(registerContext);
  const setDataFunc = (value)=>{
    setNewUserData({ ...newUserData, password:value })
  }
  return (
    <>
    <Input compName={'password'} isRequired={error.password.isRequired} func={setDataFunc} label={"Password"} type={"password"}/>
    </>
  );
};

export default PasswordComponent;
