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
import Swal from "sweetalert2";
//  Import Axios
import axios from "axios";
// Import Components From Other Files
import ImgComponent from "./ImgComponent";
import FirstName from "./FirstName";
import LastName from "./LastName";
import DateOfBirth from "./DateOfBirth";
import PhoneNumber from "./PhoneNumber";
import Email from "./Email";
import Password from "./Password";
import RoleCheckBoxComponent from "./RoleCheckBoxComponent";
import SubmitBtnComponent from "./SubmitBtnComponent";
import SignUpWithGoogle from "./SignUpWithGoogle";
import RegisterNav from "./RegisterNav";
// import  {Container}  from "../styled/Container.Styled";
//  Export Context
export const registerContext = createContext();
const Register = () => {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);
  const [newUserData, setNewUserData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
    password: "",
    role: "USER",
  });
  const [error, setError] = useState({
    firstName: {
      isError: false,
      errorMessage: "First Name Is Required",
      isRequired: true,
      regex: /[a-zA-Z]/g,
    },
    lastName: {
      isError: false,
      errorMessage: "Last Name Is Required",
      isRequired: true,
      regex: /[a-zA-Z]/g,
    },
    dateOfBirth: {
      isError: false,
      errorMessage: "Date Of Birth Is Required",
      isRequired: true,
      regex:
        /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/gs,
    },
    phoneNumber: {
      isError: false,
      errorMessage: "Phone Number Is Required",
      isRequired: true,
      regex: /([0-9]{10})$/gs,
    },
    email: {
      isError: false,
      errorMessage: "Email Is Required And Must Contain '@' ,'.com'",

      isRequired: true,
      regex:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gs,
    },
    password: {
      isError: false,
      errorMessage: "password Is Required And Contain More Then 8 Letters",
      isRequired: true,
      regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/gs,
    },
    role: {
      isError: true,
      errorMessage: "role Is Required",
      isRequired: true,
      regex: "",
    },
  });
  const [result, setResult] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [err, setErr] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [checkEveryForm, setCheckEveryForm] = useState(false);
  const register = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/users/register",
        newUserData
      );

      setResult(res.data.message);
      const profile = await axios.post(
        `http://localhost:5000/profile/${res.data.result._id}`,
        newUserData
      );
      console.log("profile :>> ", profile);
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
  const checkSubmit = () => {
    let count = 0;
    for (const elem in error) {
      if (error[elem].isError) {
        count++;
      }
    }
    if (count == 6) {
      setCheckEveryForm(false);
      return register();
    } else {
      setCheckEveryForm(true);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "It's Seems You Missed A few Fields",
      });
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
    checkSubmit,
    checkEveryForm,
    showMessage,
    setShowMessage,
  };
  return (
    <div className="Register">
      <RegisterNav />
      {/* <Container> */}
      <MDBContainer className="p-3 my-5 h-custom">
        <MDBRow>
          <ImgComponent />
          <MDBCol md="6">
            <MDBCard className="my-5">
              <MDBCardBody className="p-5">
                <MDBValidation isValidated={checkEveryForm}>
                  <registerContext.Provider value={value}>
                    <MDBRow>
                      <FirstName />

                      <LastName />
                    </MDBRow>
                    <MDBRow>
                      <DateOfBirth />
                      <PhoneNumber />
                    </MDBRow>
                    <Email />
                    <Password />
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
      {/* </Container> */}
    </div>
  );
};

export default Register;
