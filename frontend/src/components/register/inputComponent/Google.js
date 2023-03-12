import React, { useState } from 'react'
import { GoogleLogin } from "@react-oauth/google";
import { useJwt } from "react-jwt";
import { Link } from "react-router-dom";

const Google = () => {
    const [token, setToken] = useState("");
    const { decodedToken, isExpired } = useJwt(token);
  
  return (
    <>
      <div className="text-center">
        <p>
          Already Have An Account : <Link to="/login">Login</Link>
        </p>
        <br />
        <p>or sign in with:</p>

        <GoogleLogin
          className="text-center"
          onSuccess={(credentialResponse) => {
            setToken(credentialResponse.credential);
            console.log(decodedToken);
            console.log("isExpired :>> ", isExpired);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </>
  )
}

export default Google
