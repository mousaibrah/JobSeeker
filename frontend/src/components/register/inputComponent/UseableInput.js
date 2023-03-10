import React from "react";
import { Alert,  } from "react-bootstrap";
import { MDBInput } from "mdb-react-ui-kit";
import { Label } from "../../styled/Label.Styled";

const UseableInput = ({ attr }) => {
  const { label, type, action, error, className, initValue } = attr;
  return (
    <>
      <Label>{label}</Label>
      <MDBInput
        className={className}
        type={type}
        value={initValue}
        onChange={action}
        
      />
      {error && <Alert variant="danger">Require</Alert>}
    </>
  );
};

export default UseableInput;
