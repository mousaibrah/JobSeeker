import React from "react";
import { Container } from "react-bootstrap";
import HomeNav from "./HomeNav";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <HomeNav />{" "}
      <section id='home'>
      <div>
        <div
          className='home-content p-5'
          style={{ backgroundImage: `url(http://careersherpa.net/wp-content/uploads/2022/05/10-Secrets-of-Successful-Job-Seekers.png)` }}
        >
          <div className='intro container text-center text-light'>
            <h1 className='title'>WELCOME</h1>
            <h2 className='sub-title mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              laborum minus molestiae.
            </h2>
            <Link target='about' classes='btn btn-primary rounded-0 mr-2'>
              Learn More
            </Link>
            <Link target='contact' classes='btn btn-light text-dark rounded-0'>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
     {/* <img src="http://careersherpa.net/wp-content/uploads/2022/05/10-Secrets-of-Successful-Job-Seekers.png" width={'100%'}/> */}
    {/* <Container fluid className="Home"></Container> */}
    </>
  );
};

export default Home;
