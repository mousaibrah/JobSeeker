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

function App() {
  return (
    <div className="App">
      <Top />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
const Top = () => {
  const navigate = useNavigate();
  const loginL = (
    <NavDropdown.Item href="#action/3.4">
      <Nav.Link onClick={() => navigate("/login")}>Login</Nav.Link>
    </NavDropdown.Item>
  );
  const registerL = (
    <NavDropdown.Item href="#action/3.3">
      <Nav.Link onClick={() => navigate("/register")}>Register</Nav.Link>
    </NavDropdown.Item>
  );
  const profileL = (
    <NavDropdown.Item href="#action/3.1">
      <Nav.Link onClick={() => navigate("/profile")}>Profile</Nav.Link>
    </NavDropdown.Item>
  );
  const dashboardL = (
    <NavDropdown.Item href="#action/3.4">
      <Nav.Link onClick={() => navigate("/dashboard")}>Dashboard</Nav.Link>
    </NavDropdown.Item>
  );

  return <NavLinks home={{ loginL, registerL, profileL, dashboardL }} />;
};
export default App;
