import { MDBCheckbox } from "mdb-react-ui-kit";
import React, { useContext } from "react";
import {registerContext} from './Register'
const RoleCheckBoxComponent = () => {
    const {isChecked,setIsChecked,setRoles} = useContext(registerContext)
  return (
    <>
      <MDBCheckbox
        value="s"
        label="COMPANY"
        checked={isChecked}
        onChange={() => {
          setIsChecked(true);
          setRoles("6400ff7b9df16b07a6ccc50f");
        }}
      />
      <MDBCheckbox
        value="ss"
        checked={!isChecked}
        onChange={() => {
          setIsChecked(false);
          setRoles("6400ff849df16b07a6ccc511");
        }}
        label="USER"
      />
    </>
  );
};

export default RoleCheckBoxComponent;
