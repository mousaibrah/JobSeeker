import React, { useEffect, useState } from "react";
import { Button } from "../styled/Button.Styled";
import HomeNav from "./HomeNav";
import "./Style.css";
import { MDBCardImage } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { Box } from "../styled/Box.Styled";
import { Row } from "../styled/Row.Styled";
import { Col } from "../styled/Column.Styled";
import { Container } from "../styled/Container.Styled";

const Home = () => {
  const navigate = useNavigate();
  const images = [
    "https://t3.ftcdn.net/jpg/00/81/26/82/360_F_81268225_eVHynMTlVQf3wVdYOoUEz8d8KolhVZm0.jpg",
    "https://burst.shopifycdn.com/photos/macbook-air-on-desk.jpg?width=1200&format=pjpg&exif=1&iptc=1",
    "https://cached.imagescaler.hbpl.co.uk/resize/scaleHeight/815/cached.offlinehbpl.hbpl.co.uk/news/OMC/WFH-2019092007545320.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <>
      {/* <Container fluid> */}
      <HomeNav />{" "}
      <Container className="Home">
        <div className="img-container">
          <MDBCardImage src={images[currentIndex]} fluid width={"100%"} />
        </div>
        <Box className="text-container">
          <Col className="text-col" gb="5px">
            <Row>
              The journey of a thousand miles begins with a single step Take
              Your
            </Row>
            <hr />
            <Row>
              First Step And Join Our Website The journey of a thousand miles
              begins
            </Row>
            <hr />

            <Row>with a single step I Hope We Can Help You Find You A Job </Row>
            <Button className="join-btn" onClick={() => navigate("/register")}>
              Proceed Your journey ▶️
            </Button>
          </Col>
        </Box>
      </Container>
      {/* </Container> */}
    </>
  );
};

export default Home;
