import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Home = () => {
  return (
    <div className="Home">
    <Container>
      {" "}
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
            width='100px'
          />
        </Carousel.Item>
      </Carousel>
    </Container>
    </div>
  );
};

export default Home;
