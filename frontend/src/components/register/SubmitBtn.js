import React,{useContext} from 'react'
import { RegisterContext } from '../Context/Context'
const SubmitBtn = () => {
const {registerInfo,setRegisterInfo,errors, setErrors} = useContext(RegisterContext)
  return (
    <div>SubmitBtn</div>
  )
}

export default SubmitBtn