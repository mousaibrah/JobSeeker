// Import React & React Router
import React, { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
//  Import Bootstrap Components
import {MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBValidation,} from "mdb-react-ui-kit";
//  Import Axios
import axios from "axios";
// Import Components From Other Files
import ImgComponent from "./ImgComponent";
import FirstNameComponent from "./FirstNameComponent";
import LastNameComponent from "./LastNameComponent";
import DateOfBirthComponent from "./DateOfBirthComponent";
import PhoneNumberComponent from "./PhoneNumberComponent";
import EmailComponent from "./EmailComponent";
import PasswordComponent from "./PasswordComponent";
import RoleCheckBoxComponent from "./RoleCheckBoxComponent";
import SubmitBtnComponent from "./SubmitBtnComponent";
import SignUpWithGoogle from "./SignUpWithGoogle";
import RegisterNav from "./RegisterNav";
//  Export Context
export const registerContext = createContext();
const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("6400ff849df16b07a6ccc511");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [err, setErr] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const register = async () => {
    const newUser = {
      firstName,
      lastName,
      dateOfBirth,
      phoneNumber,
      email,
      password,
      role,
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/users/register",
        newUser
      );

      setResult(res.data.message);
      setIsRegistered(true);
      setTimeout(() => {
        setFirstName("");
        setLastName("");
        setDateOfBirth("");
        setPhoneNumber("");
        setEmail("");
        setErr(false);

        setPassword("");
        setIsRegistered(false);
        navigate("/login");
      }, 3000);
    } catch (error) {
      setResult(error.response.data.message);
      console.log(error);
      setErr(true);
    }
  };
  const setRoles = (roleName) => {
    return setRole(roleName);
  };
  const value = {
    isChecked,
    setIsChecked,
    setRoles,
    register,
    isRegistered,
    err,
    result,
    setPhoneNumber,
    phoneNumber,
    password,
    setPassword,
    lastName,
    setLastName,
    setEmail,
    email,
    setFirstName,
    firstName,
    dateOfBirth,
    setDateOfBirth,
  };
  return (
    <div className="Register">
      <RegisterNav />
      <MDBContainer className="p-3 my-5 h-custom">
        <MDBRow>
          <ImgComponent />
          <MDBCol md="6">
            <MDBCard className="my-5">
              <MDBCardBody className="p-5">
                <MDBValidation className="row g-3" isValidated>
                  <registerContext.Provider value={value}>
                    <MDBRow>
                      <FirstNameComponent />
                      <LastNameComponent />
                    </MDBRow>
                    <MDBRow>
                      <DateOfBirthComponent />
                      <PhoneNumberComponent />
                    </MDBRow>
                    <EmailComponent />
                    <PasswordComponent />
                    <RoleCheckBoxComponent />
                    <SubmitBtnComponent />
                    <SignUpWithGoogle />
                  </registerContext.Provider>
                </MDBValidation>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Register;
