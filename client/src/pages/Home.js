import React from "react";
import logo1 from "../Assets/images/logo-black.png";
import developer_hands from "../Assets/images/developer_hands.jpg";
import social_media from "../Assets/images/social_media.jpg";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <Container fluid="md">
      <div>
        <h1 className="text-center">Welcome to DevCrowd!</h1>
        <h3 className="text-center"> -A place where developers can connect with each other</h3>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={logo1}
              alt="devcrowd"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Welcome to DevCrowd!</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={developer_hands}
              alt="devs"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Make life-long friends!</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={social_media}
              alt="social"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 style={{ color: "black" }}>
                Stay connected with your Dev friends!
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
}

export default Home;
