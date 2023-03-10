import React,{useContext} from 'react'
import { RegisterContext } from '../Context/Context'
import UseableInput from './UseableInput';
const Password = () => {
const {registerInfo,setRegisterInfo} = useContext(RegisterContext)
const attr = {
  label: "Password",
  type: "password",
  action: (e) =>setRegisterInfo({ ...registerInfo, password: e.target.value }),
  className: "password",
  initValue: registerInfo.password,
  
};
  return (
    <UseableInput attr={attr}/>
  )
}

export default Password