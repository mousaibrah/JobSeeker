import React, { useContext } from "react";
import { RegisterContext } from "../Context/Context";
import UseableInput from "./UseableInput";

const FirstName = () => {
  const { registerInfo, setRegisterInfo } =
    useContext(RegisterContext);

  const attr = {
    label: "First Name",
    type: "text",
    action: (e) =>setRegisterInfo({ ...registerInfo, firstName: e.target.value }),
    className: "firstName",
    initValue: registerInfo.firstName,
    
    
  };

  return <UseableInput attr={attr} />;
};

export default FirstName;
