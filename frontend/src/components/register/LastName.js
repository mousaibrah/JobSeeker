import { MDBCol, MDBInput } from "mdb-react-ui-kit";
import React, { useContext } from "react";
import Input from "../Input/Input";
import { registerContext } from "./Register";
const LastName = () => {
  const { newUserData, setNewUserData,error } = useContext(registerContext);
  const setDataFunc = (value)=>{
    setNewUserData({ ...newUserData, lastName:value })
  }
  return (
    <MDBCol col="6">
    <Input compName={'lastName'} isRequired={error.lastName.isRequired} func={setDataFunc} label={"Last name"} type={"text"}/>
    </MDBCol>
 
  );
};

export default LastName;
