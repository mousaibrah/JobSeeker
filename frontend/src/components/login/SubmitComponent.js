import React, { useContext } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import Alert from "react-bootstrap/Alert";
import { Link, useNavigate } from "react-router-dom";
import { loginContext } from "./Login";
import { Button } from "react-bootstrap";
const SubmitComponent = () => {
  const { result, err, isLoggedIn, login } = useContext(loginContext);
  return (
    <div className="text-center text-md-start mt-4 pt-2">
      <Button onClick={login} className="mb-0 px-5" size="lg">
        Login
      </Button>
      {isLoggedIn && (
        <Alert key={"success"} variant="success">
          Logged In Successfully
        </Alert>
      )}
      {err && (
        <Alert key={"danger"} variant="danger">
          {result}
        </Alert>
      )}
      <p className="small fw-bold mt-2 pt-1 mb-2">
        Don't have an account?{" "}
        <Link to="/register" className="link-danger">
          Register
        </Link>
      </p>
    </div>
  );
};

export default SubmitComponent;
