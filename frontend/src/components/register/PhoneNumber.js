import { MDBInput, MDBCol } from "mdb-react-ui-kit";
import React, { useContext } from "react";
import Input from "../Input/Input";
import {registerContext} from "./Register";
const PhoneNumber = () => {
  const { newUserData, setNewUserData,error } = useContext(registerContext);
  const setDataFunc = (value)=>{
    setNewUserData({ ...newUserData, phoneNumber:value })
  }
  return (
    <MDBCol col="6">
    <Input compName={'phoneNumber'} isRequired={error.phoneNumber.isRequired} func={setDataFunc} label={"Phone Number"} type={"tel"}/>
    </MDBCol>
  );
};

export default PhoneNumber;
