import axios from "axios";
import React, { useContext } from "react";
import { Alert, } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RegisterContext } from "./Context/Context";
import { Button } from "../styled/Button.Styled";

const SubmitBtn = () => {
  const navigate = useNavigate();
  const {
    registerInfo,
    result,
    setResult,
    err,
    setErr,
    isRegistered,
    setIsRegistered,
  } = useContext(RegisterContext);
  const register = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/users/register",
        registerInfo
      );

      setResult(res.data.message);
      if (res?.data?.result?._id) {
        const profile = await axios.post(
          `http://localhost:5000/profile/${res.data.result._id}`,
          registerInfo
        );
        console.log("profile :>> ", profile);
      }

      setIsRegistered(true);
      
    } catch (error) {
      setIsRegistered(false);
      setResult(error.response.data.message);
      setErr(true);
    }
  };
  if(isRegistered){
    setTimeout(() => {
      
      navigate("/login");
    }, 2000);
  }
  return (
    <>
    
      <Button onClick={register}>Register</Button>
      {isRegistered && <Alert variant="success">{result}</Alert>}
      {err && <Alert variant="danger">{result}</Alert>}
    </>
  );
};

export default SubmitBtn;
