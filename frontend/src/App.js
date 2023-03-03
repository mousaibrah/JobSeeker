import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import DashBoard from "./components/dashboard/DashBoard";
import Login from "./components/login/Login";
import NavLinks from "./components/navbar/NavLinks";
import Profile from "./components/profile/Profile";
import Register from "./components/register/Register";
import Home from "./components/Home/Home";
import Error from "./components/404/Error";
import React, { useState, createContext } from "react";
export const userContext = createContext();
function App() {
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || null
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const value = {
    userId,
    setUserId,
    token,
    setToken,
    isLoggedIn,
    setIsLoggedIn,
  };
  return (
    <userContext.Provider value={value}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </userContext.Provider>
  );
}

export default App;
