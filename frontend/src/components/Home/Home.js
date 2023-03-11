import React, { useEffect, useState } from "react";
import { Button } from "../styled/Button.Styled";
import { Container } from "react-bootstrap";
import HomeNav from "./HomeNav";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

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
    <Container fluid>
      <HomeNav />{" "}
      <MDBCard>
        <MDBCardBody className="Home">
          <div className="img-container">
            <MDBCardImage src={images[currentIndex]} fluid width={"100%"} />
          </div>
          <div className="text-container">
            {" "}
            <MDBCardText
              style={{
                color: "#2d2e37",
                fontStyle: "italic",
                fontSize: "30px",
              }}
            >
              The journey of a thousand miles begins with a single step
            </MDBCardText>
            <MDBCardText
              style={{
                color: "#2d2e37",
                fontStyle: "italic",
                fontSize: "30px",
              }}
            >
              Take Your First Step And Join Our Website{" "}
            </MDBCardText>
            <MDBCardText
              style={{
                color: "#2d2e37",
                fontStyle: "italic",
                fontSize: "30px",
              }}
            >
              The journey of a thousand miles begins with a single step
            </MDBCardText>
            <MDBCardText
              style={{
                color: "#2d2e37",
                fontStyle: "italic",
                fontSize: "30px",
              }}
            >
              I Hope We Can Help You Find You A Job{" "}
            </MDBCardText>
            <Button className="join-btn" onClick={() => navigate("/register")}>
              Join Job Seeker ▶️
            </Button>
          </div>
        </MDBCardBody>
      </MDBCard>
    </Container>
  );
};

export default Home;
