import React from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../styled/Input.Styled";
import { Link } from "../styled/Links";
import { NavBar } from "../styled/NavBar.Styled";

const NavLinks = ({ home }) => {
  const navigate = useNavigate();
  const role = JSON.parse(localStorage.getItem("role"));
  const Logged = JSON.parse(localStorage.getItem("logged"));
  return (
    <NavBar>
      {Logged ? (
        <div onClick={() => navigate("/feed")} className="Logo">
          JOB<span>SEEKER</span>
        </div>
      ) : (
        <div onClick={() => navigate("/")} className="Logo">
          JOB<span>SEEKER</span>
        </div>
      )}

      <div className="Links">
        {role === "ADMIN" && (
          <Link onClick={() => navigate("/dashboard")}>Dashboard</Link>
        )}
        {home?.feed}
        {home?.profileL}
        {home?.loginL}
        {home?.registerL}
        {home?.Logout}
      </div>
    </NavBar>
  );
};

export default NavLinks;
