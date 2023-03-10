import React, { createContext,useState } from "react";
import Register from "../Register";
export const RegisterContext = createContext();
const Context = () => {
const [registerInfo, setRegisterInfo] = useState({})
  const value = {registerInfo,
    setRegisterInfo};
  return (
    <RegisterContext.Provider value={value}>
      <Register />
    </RegisterContext.Provider>
  );
};

export default Context;
