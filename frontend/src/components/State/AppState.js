import React, { createContext, useState } from "react";
import App from "../../App";
export const AppContext = createContext();
const AppState = () => {
  const [userId, setUserId] = useState(JSON.parse(localStorage.getItem("userId")) || "");
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || null
  );
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("logged")) || false
  );
  const [posts, setPosts] = useState([]);
  const [role, setRole] = useState(JSON.parse(localStorage.getItem("role"))||'');

  const value = {
    userId,
    setUserId,
    token,
    setToken,
    isLoggedIn,
    setIsLoggedIn,
    posts,
    setPosts,
    role,
    setRole,
  };
  return (
    <AppContext.Provider value={value}>
      <App />
    </AppContext.Provider>
  );
};

export default AppState;
