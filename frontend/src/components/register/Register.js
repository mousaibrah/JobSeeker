// Import React & React Router
import React, { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
//  Import Bootstrap Components
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBValidation,
} from "mdb-react-ui-kit";
//  Import Axios
import axios from "axios";
// Import Components From Other Files
import ImgComponent from "./ImgComponent";
import FirstNameComponent from "./FirstNameComponent";
import LastNameComponent from "./LastNameComponent";
import DateOfBirth from "./DateOfBirth";
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
  const [newUserData, setNewUserData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
    password: "",
    role: "6400ff849df16b07a6ccc511",
  });
  const [error, setError] = useState({
    firstName: {
      isError: false,
      errorMessage: "First Name Is Required",
      isRequired: true,
      regex:/^[a-zA-Z]+ [a-zA-Z]+$/
    },
    lastName: {
      isError: false,
      errorMessage: "Last Name Is Required",
      isRequired: true,
      regex:/^[a-zA-Z]+ [a-zA-Z]+$/
    },
    dateOfBirth: {
      isError: false,
      errorMessage: "Date Of Birth Is Required",
      isRequired: true,
      regex:/^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/
    },
    phoneNumber: {
      isError: false,
      errorMessage: "Phone Number Is Required",
      isRequired: true,
      regex:/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    },
    email: {
      isError: false,
      errorMessage: "Email Is Required And Must Contain '@' ,'.com'",

      isRequired: true,
      regex:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    },
    password: {
      isError: false,
      errorMessage: "password Is Required And Contain More Then 8 Letters",
      isRequired: true,
      regex:/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
    },
    role: {
      isError: false,
      errorMessage: "role Is Required",
      isRequired: true,
      regex:/^[A-Za-z0-9]*$/
    },
  });
  const [result, setResult] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [err, setErr] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const register = async () => {
    try {
      console.log(newUserData);
      const res = await axios.post(
        "http://localhost:5000/users/register",
        newUserData
      );

      setResult(res.data.message);
      setIsRegistered(true);
      setTimeout(() => {
        setErr(false);
        setIsRegistered(false);
        navigate("/login");
      }, 3000);
    } catch (error) {
      setResult(error.response.data.message);
      console.log(error);
      setErr(true);
    }
  };
  const value = {
    isChecked,
    setIsChecked,
    register,
    isRegistered,
    err,
    result,
    newUserData,
    setNewUserData,
    error,
    setError,
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
                {/* <MDBValidation isValidated> */}
                  <registerContext.Provider value={value}>
                    <MDBRow>
                      <FirstNameComponent />

                      <LastNameComponent />
                    </MDBRow>
                    <MDBRow>
                      <DateOfBirth />
                      <PhoneNumberComponent />
                    </MDBRow>
                    <EmailComponent />
                    <PasswordComponent />
                    <RoleCheckBoxComponent />
                    <SubmitBtnComponent />
                    <SignUpWithGoogle />
                  </registerContext.Provider>
                {/* </MDBValidation> */}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Register;
