import { MDBCheckbox } from "mdb-react-ui-kit";
import React, { useContext } from "react";
import { registerContext } from "./Register";
const RoleCheckBoxComponent = () => {
  const { isChecked, setIsChecked, setNewUserData, newUserData } =
    useContext(registerContext);
  return (
    <>
      <MDBCheckbox
        value="COMPANY"
        label="COMPANY"
        checked={isChecked}
        onChange={(e) => {
          setIsChecked(true);
          setNewUserData({ ...newUserData, role: e.target.value });
        }}
      />
      <MDBCheckbox
        value="USER"
        checked={!isChecked}
        onChange={(e) => {
          setIsChecked(false);
          setNewUserData({ ...newUserData, role: e.target.value });
        }}
        label="USER"
      />
    </>
  );
};

export default RoleCheckBoxComponent;
