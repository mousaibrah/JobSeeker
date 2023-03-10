import axios from "axios";
import React, { useContext } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RegisterContext } from "./Context/Context";
import { Button } from "../styled/Button.Styled";

const SubmitBtn = () => {
  const navigate = useNavigate();
  const { registerInfo,result,setResult,err, setErr,isRegistered, setIsRegistered } = useContext(RegisterContext);
  const register = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/users/register",
        registerInfo
      );
      console.log('res :>> ', res);
   console.log('registerInfo :>> ', registerInfo);
      setResult(res.data.message);
      const profile = await axios.post(
        `http://localhost:5000/profile/${res.data.result._id}`,
        registerInfo
      );
      setResult(res.data.message);
      setIsRegistered(true)
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      setIsRegistered(false)
      setResult(error.response.data.message);
      setErr(true);
    }
  };
  return (
  <>
  <Button onClick={register}>Register</Button>
  {isRegistered&&<Alert variant='success'>{result}</Alert>}
  {err&&<Alert variant='danger'>{result}</Alert>}
  </>
  );
};

export default SubmitBtn;
