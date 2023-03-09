import React, { createContext, useState } from "react";
import App from "../../App";
export const AppContext = createContext();
const AppState = () => {
  const [userId, setUserId] = useState(localStorage.getItem("userId") || null);
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || null
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const [profilePosts, setProfilePosts] = useState([]);

  const [profileData, setProfileData] = useState(
    JSON.parse(localStorage.getItem("profile")) || {
     
    }
  );
  const value = {
    userId,
    setUserId,
    token,
    setToken,
    isLoggedIn,
    setIsLoggedIn,
    profileData,
    setProfileData,
    posts,
    setPosts,
    profilePosts,
    setProfilePosts,
  };
  return (
    <AppContext.Provider value={value}>
      <App />
    </AppContext.Provider>
  );
};

export default AppState;
