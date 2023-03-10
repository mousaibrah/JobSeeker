import React,{useContext} from 'react'
import { RegisterContext } from '../Context/Context'
import UseableInput from './UseableInput';
const Date = () => {
const {registerInfo,setRegisterInfo} = useContext(RegisterContext)
const attr = {
  label: "Date Of Birth",
  type: "date",
  action: (e) =>setRegisterInfo({ ...registerInfo, dateOfBirth: e.target.value }),
  className: "dateOfBirth",
  initValue: registerInfo.dateOfBirth,
  
  
};
  return (
    <UseableInput attr={attr}/>
  )
}

export default Date