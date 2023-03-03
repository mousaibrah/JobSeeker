import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavLinks from "../navbar/NavLinks";


const Home = () => {
  return (
    <Container fluid className="Home">
      <Top />{" "}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://imageio.forbes.com/specials-images/dam/imageserve/488470902/960x0.jpg?format=jpg&width=960"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.imgacademy.com/sites/default/files/2022-07/img-homepage-meta.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.imgacademy.com/sites/default/files/2022-07/img-homepage-meta.jpg"
            alt="Third slide"
            width="100px"
          />
        </Carousel.Item>
      </Carousel>
    
    </Container>
  );
};
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

export default Home;
