import React,{useContext} from 'react'
import { RegisterContext } from '../Context/Context'
import UseableInput from './UseableInput';
const Mobile = () => {
    const {registerInfo,setRegisterInfo} = useContext(RegisterContext)
    const attr = {
      label: "Phone Number",
      type: "tel",
      action: (e) =>setRegisterInfo({ ...registerInfo, phoneNumber: e.target.value }),
      className: "phoneNumber",
      initValue: registerInfo.phoneNumber,
      
    };
  return (
    <UseableInput attr={attr}/>
  )
}

export default Mobile