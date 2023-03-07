// Import Css Files
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import { Container } from "react-bootstrap";
// Import React & react Router
import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
// Import Components
import DashBoard from "./components/dashboard/DashBoard";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./components/Home/Home";
import Error from "./components/404/Error";
import Footer from "./components/Footer/Footer";
import ProfilePage from "./components/profile/ProfilePage";
// Export Context
export const userContext = createContext();
function App() {
  const [userId, setUserId] = useState(localStorage.getItem("userId") || null);
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || null
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Context Value
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
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Container fluid>
          <Footer />
        </Container>
      </div>
    </userContext.Provider>
  );
}

export default App;
