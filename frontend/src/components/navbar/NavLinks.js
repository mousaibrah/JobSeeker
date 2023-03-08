import React from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../styled/NavBar.Styled";

const NavLinks = ({ home }) => {
  const navigate = useNavigate();

  return (
        <NavBar>
        <div onClick={() => navigate("/")} className="Logo">JOB<span >SEEKER</span></div>
        <div className="Links">{home?.dashboardL}
{home?.profileL}
{home?.loginL}
{home?.registerL}
{home?.Logout}</div>

        </NavBar>
  
  );
};

export default NavLinks;
