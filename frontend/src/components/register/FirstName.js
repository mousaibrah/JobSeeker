import { MDBCol, MDBInput } from "mdb-react-ui-kit";
import React, { useContext } from "react";
import Input from "../Input/Input";
import { registerContext } from "./Register";
const FirstName = () => {
  const { setNewUserData, newUserData,error } = useContext(registerContext);
  const setDataFunc = (value)=>{
    setNewUserData({ ...newUserData, firstName:value })
  }
  return (

    <MDBCol col="6">
    <Input compName={'firstName'} isRequired={error.firstName.isRequired} func={setDataFunc} label={"First name"} type={"text"}/>
    </MDBCol>
   
  );
};

export default FirstName;
