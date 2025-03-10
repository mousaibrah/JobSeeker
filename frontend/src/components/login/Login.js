// Import React & React Router
import React, { useState, useContext, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//  Import Bootstrap Components
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
//  Import Axios
import axios from "axios";
// Import Components From Other Files
import EmailComponent from "./EmailComponent";
import PasswordComponent from "./PasswordComponent";
import { AppContext } from "../State/AppState";
import ImgComponent from "./ImgComponent";
import SubmitComponent from "./SubmitComponent";
import RememberMeComponent from "./RememberMeComponent";
import LoginNav from "./LoginNav";
//  Export Context
export const loginContext = createContext();
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken, isLoggedIn, setIsLoggedIn, setUserId, role, setRole } =
    useContext(AppContext);
  const [result, setResult] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      setTimeout(() => {
        if (role === "ADMIN") {
          navigate("/dashboard");
        } else {
          navigate("/feed");
        }
      }, 2000);
    }
  }, [isLoggedIn]);

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5000/users/login", {
        email,
        password,
      });
      if (res.data.success) {
        setUserId(res.data.userId);
        setToken(res.data.token);
        setRole(res.data.role);
        localStorage.setItem("userId", JSON.stringify(res.data.userId));
        localStorage.setItem("role", JSON.stringify(res.data.role));
        localStorage.setItem("logged", JSON.stringify(true));
        localStorage.setItem("token", JSON.stringify(res.data.token));
        setIsLoggedIn(true);
        setErr(false);
      }
    } catch (error) {
      setResult(error?.response?.data?.message);
      console.log("error :>> ", error);
      setErr(true);
    }
  };

  const value = {
    result,
    err,
    isLoggedIn,
    login,
    setEmail,
    email,
    password,
    setPassword,
    rememberMe,
    setRememberMe,
  };
  return (
    <>
      <LoginNav />
      <MDBContainer className="p-3 my-5 h-custom">
        <MDBRow>
          <MDBCol col="10" md="6">
            <ImgComponent />
          </MDBCol>
          <MDBCol col="4" md="6">
            <loginContext.Provider value={value}>
              <EmailComponent />
              <PasswordComponent />
              <RememberMeComponent />
              <SubmitComponent />
            </loginContext.Provider>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <br />
          <br />
          <br />
          <br />
          <br />
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Login;
