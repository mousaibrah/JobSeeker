import { Form } from "react-bootstrap";
import React,{useContext} from 'react'
import { RegisterContext } from '../Context/Context'
const Role = () => {
const {} = useContext(RegisterContext)
  return (
    <div>
      <Form.Check
        inline
        label="1"
        name="group1"
        type="radio"
        id={`inline-$'radio'-1`}
      />
      <Form.Check
        inline
        label="2"
        name="group1"
        type="radio"
        id={`inline-$'radio'-2`}
      />
    </div>
  );
};

export default Role;
