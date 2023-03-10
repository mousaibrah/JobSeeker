import React,{useContext} from 'react'
import { RegisterContext } from '../Context/Context'
import UseableInput from './UseableInput';
const LastName = () => {
const {registerInfo,setRegisterInfo} = useContext(RegisterContext)
const attr = {
  label: "Last Name",
  type: "text",
  action: (e) =>setRegisterInfo({ ...registerInfo, lastName: e.target.value }),
  className: "lastName",
  initValue: registerInfo.lastName,
  
};
  return (
    <UseableInput attr={attr} />
  )
}

export default LastName