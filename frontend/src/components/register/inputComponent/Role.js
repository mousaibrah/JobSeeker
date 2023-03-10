import { Form } from "react-bootstrap";
import React,{useContext} from 'react'
import { RegisterContext } from '../Context/Context'
const Role = () => {
const {registerInfo,
    setRegisterInfo} = useContext(RegisterContext)
  return (
    <div>
      <Form.Check
        inline
        value='COMPANY'
        label="Company"
        name="group1"
        onChange={(e)=>setRegisterInfo({...registerInfo,role:e.target.value})}
        type="radio"
        id={`inline-$'radio'-1`}
      />
      <Form.Check
        inline
        value='USER'
        label="User"
        name="group1"
        onChange={(e)=>setRegisterInfo({...registerInfo,role:e.target.value})}
        type="radio"
        id={`inline-$'radio'-2`}
      />
    </div>
  );
};

export default Role;
