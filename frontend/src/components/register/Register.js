import React,{useContext} from 'react'
import FirstName from './inputComponent/FirstName'
import { RegisterContext } from './Context/Context';
import LastName from './inputComponent/LastName';
import Mobile from './inputComponent/Mobile';
import Email from './inputComponent/Email';
import Password from './inputComponent/Password';
import { Container } from 'react-bootstrap';
import Date from './inputComponent/Date';
import Location from './inputComponent/Location';
import Img from './inputComponent/Img';
import Role from './inputComponent/Role';
import SubmitBtn from './SubmitBtn';
const Register = () => {
 
  return (
    <Container>
     
      <FirstName/>
      <LastName/>
      <Mobile/>
      <Email/>
      <Password/>
      <Date/>
      <Location/>
      <Img/>
      <Role/>
      <SubmitBtn/>
    </Container>
  )
}

export default Register