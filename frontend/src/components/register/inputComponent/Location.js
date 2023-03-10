import React,{useContext} from 'react'
import { RegisterContext } from '../Context/Context'
import UseableInput from './UseableInput';
const Location = () => {
const {registerInfo,setRegisterInfo} = useContext(RegisterContext)
const attr = {
  label: "Address",
  type: "text",
  action: (e) =>setRegisterInfo({ ...registerInfo, location: e.target.value }),
  className: "location",
  initValue: registerInfo.location,
  
  
};
  return (
    <UseableInput attr={attr}/>
  )
}

export default Location