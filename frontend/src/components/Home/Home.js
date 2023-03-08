import React from "react";
import Carousel from "react-bootstrap/Carousel";
import {  Container } from "react-bootstrap";
import { Button } from "../styled/Button.Styled";
import HomeNav from "./HomeNav";
import { MDBCol, MDBRow, MDBCard, MDBCardBody, MDBBtn } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container fluid>
      <HomeNav />{" "}
      <MDBRow>
        <MDBCol col="6" className="home-img">
          <MDBCard>
            <MDBCardBody>
              <Carousel className="carousel-dark">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://st2.depositphotos.com/3591429/7168/i/950/depositphotos_71682885-stock-photo-diverse-people-and-job-search.jpgi"
                    alt="First slide"
                    style={{ width: "500px", height: "500px" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="http://unblast.com/wp-content/uploads/2020/05/Job-Hunting-Illustration.jpg"
                    alt="Second slide"
                    style={{ width: "500px", height: "500px" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://www.educationalappstore.com/blog/wp-content/uploads/2019/06/tips-for-job-hunting-600x350.jpg"
                    alt="Third slide"
                    style={{ width: "500px", height: "500px" }}
                  />
                </Carousel.Item>
              </Carousel>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol col="6" className="w-50">
          <MDBCard>
            <MDBCardBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              deleniti nam sunt provident sequi laborum ad autem quidem ducimus
              deserunt dolore optio accusamus harum velit quaerat, natus eveniet
              quis repellat. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Odit saepe nobis sit, quas quae distinctio pariatur eos
              possimus ipsum. In laudantium eligendi quisquam ac Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Consequuntur ratione
              modi, facere odio harum, sapiente officia culpa, sequi aperiam
              fugiat neque temporibus veritatis saepe tenetur dolor sint quod
              dicta! Aperiam. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Autem, animi vero architecto illum neque quidem nobis
              cupiditate corporis sed nisi laborum, officiis corrupti cumque,
              iste a dolore consectetur modi iure. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Laborum ipsam minus tenetur quos
              dolorum asperiores inventore saepe quas provident obcaecati ullam
              enim ex iste, labore libero facilis. Dolor, totam deserunt! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Vero expedita
              incidunt commodi officiis cum placeat voluptas porro. Aspernatur
              molestiae quae est, modi similique iure repellat ducimus incidunt!
              Maxime, repellendus illo? Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Soluta saepe laborum asperiores illo? Fugit
              inventore corporis illum,
            </MDBCardBody>
            <h2 className="text-primary">
              Hi, are you looking for a job right now?
            </h2>
            <Button
              onClick={() => {
                navigate("/register");
              }}
            >
              Join Us Now
            </Button>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </Container>
  );
};

export default Home;
