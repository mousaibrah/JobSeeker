import {  MDBInput } from "mdb-react-ui-kit";
import React, { useContext } from "react";
import Input from "../Input/Input";
import { registerContext } from "./Register";
const EmailComponent = () => {
  const { setNewUserData, newUserData,error } = useContext(registerContext);
  const setDataFunc = (value)=>{
    setNewUserData({ ...newUserData, email:value })
  }
  return (
    <>
   
    <Input compName={'email'} isRequired={error.email.isRequired} func={setDataFunc} label={"Email Address"} type={"email"}/>
   
    </>
  );
};

export default EmailComponent;
