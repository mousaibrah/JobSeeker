import React,{useContext} from 'react'
import { RegisterContext } from '../Context/Context'
import UseableInput from './UseableInput'
const Email = () => {
const {registerInfo,setRegisterInfo} = useContext(RegisterContext)
const attr = {
  label: "Email Address",
  type: "email",
  action: (e) =>setRegisterInfo({ ...registerInfo, email: e.target.value }),
  className: "email",
  initValue: registerInfo.email,
  
};
  return (
    <UseableInput attr={attr}/>
  )
}

export default Email