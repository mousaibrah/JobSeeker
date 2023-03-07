import { MDBInput, MDBValidation } from "mdb-react-ui-kit";
import React, { useContext } from "react";
import { registerContext } from "../register/Register";
import { v4 } from "uuid";
const Input = ({ compName, isRequired, func, label, type }) => {
  const { error, setError, newUserData, checkEveryForm } =
    useContext(registerContext);

  return (
    <>
      <p>{label}</p>
      <MDBInput
        className="form-control"
        id={`formControlLg ${v4()}`}
        required={isRequired}
        onBlur={(e) => {
          const regex = error[compName].regex;
          const value = e.target.value;
          if (regex.test(`${value}`)) {
            const newError = { ...error };
            newError[compName].isError = true;
            setError(newError);
          }
        }}
        value={newUserData[compName]}
        onChange={(e) => {
          func(e.target.value);
        }}
        wrapperClass="mb-4"
        type={type}
      />

      {!error[compName].isError && checkEveryForm ? (
        <p>{error[compName].errorMessage}</p>
      ) : (
        ""
      )}
    </>
  );
};

export default Input;
