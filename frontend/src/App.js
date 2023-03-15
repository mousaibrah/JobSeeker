// Import Css Files
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import GlobalStyle from "./components/styled/Global.Styled";
import "mdbreact/dist/css/mdb.css";
import { Container } from "react-bootstrap";
// TEXT EDITOR
import "react-quill/dist/quill.snow.css";
// Import React & react Router
import React from "react";
import { Routes, Route } from "react-router-dom";
// Import Components
import Feed from "./components/Feed/Feed";
import Login from "./components/login/Login";
import Home from "./components/Home/Home";
import Error from "./components/404/Error";
import Footer from "./components/Footer/Footer";
import ProfilePage from "./components/profile/ProfilePage";
import Context from "./components/register/Context/Context";
import PostPage from "./components/Feed/PostPage";
import Modal01 from "./components/Feed/addJobModal/Modal01";
import DashBoard from "./components/AdminDashBoard/DashBoard";
import ViewProfile from "./components/viewProfile/ViewProfile";
// Export Context

// Import Styled Container
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/:userId" element={<ViewProfile />} />
        <Route path="/Feed" element={<Feed />} />
        <Route path="/Feed/:id" element={<PostPage />} />
        <Route path="/Feed/create" element={<Modal01 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Context />} />
        <Route path="*" element={<Error />} />
      </Routes>

    
        
      
    </div>
  );
}

export default App;
