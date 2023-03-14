import React, { createContext, useState } from "react";
import Register from "../Register";
export const RegisterContext = createContext();
const Context = () => {
  const [registerInfo, setRegisterInfo] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    img: "",
    location: "",
    phoneNumber: "",
    password: "",
    role:'USER'
  });
  const [result, setResult] = useState("");
  const [err, setErr] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const value = {
    registerInfo,
    setRegisterInfo,
    result,
    setResult,
    err,
    setErr,
    isRegistered,
    setIsRegistered,
  };
  return (
    <RegisterContext.Provider value={value}>
      <Register />
    </RegisterContext.Provider>
  );
};

export default Context;
