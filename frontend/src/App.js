import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css'
import { Container, Nav, Navbar, NavDropdown, } from "react-bootstrap";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
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
      <Container fluid>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="https://www.facebook.com/mousa.1999" target={'_blank'} className="me-4 text-reset">
              <MDBIcon fab icon="facebook-f" />
            </a>
          
            <a href="https://www.instagram.com/mousa.ibrah/" target={'_blank'} className="me-4 text-reset">
              <MDBIcon fab icon="instagram" />
            </a>
            <a href="https://github.com/mousaibrah" target={'_blank'} className="me-4 text-reset">
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon icon="gem" className="me-3" />
                  Mousa-Enterprise
                </h6>
                <p>
                  We Are A Groupe Of Developers We Create Any Project Your Desire
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                 Jordan-Amman 
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  mousaKibrahim@gmail.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> + 962 7886 803 7753
                </p>
                
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="http://localhost:3000/">
            JobSeeker
          </a>
        </div>
      </MDBFooter>
      </Container>
    </userContext.Provider>
  );
}

export default App;
