import React from "react";
import { ReactDOM } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
// import Sc2 from "./Sc2";

import yellow from "../../Assets/yellow.jpg";
import i3 from "../../Assets/i3.jpg";
import j2 from "../../Assets/j2.jpg";
import w1 from "../../Assets/w1.avif";
import w3 from "../../Assets/w3.jpg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Styels>
      <Container>
      <Container>
        <Row>
          <Col md="6">
              <img
                src={i3}
                className=""
                style={{ width: "100%", padding: "10px", borderRadius: "1px" }}
              />
          </Col>
          <Col
            md="6"
            className=""
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
              <p
                style={{
                  padding: "20px",
                  fontSize: "1.6rem",
                  fontWeight: "500",
                  fontFamily: "Gaqire",
                }}
              >
                At K & Q Courier Service, our journey is a story of passion,
                perseverance, and a relentless pursuit of excellence. What began
                as a humble venture has blossomed into a renowned courier
                service trusted by businesses and individuals alike. Our story
                is rooted in a commitment to punctuality and dedication to
                customer satisfaction.
              </p>
              <Link to="/get-delivery-quote">
                <button className="bttn">Get Quote</button>
              </Link>
          </Col>
        </Row>

        <Row>
          <Col
            md="6"
            className=""
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
              <p
                style={{
                  padding: "20px",
                  fontSize: "1.6rem",
                  fontWeight: "500",
                  fontFamily: "Gaqire",
                }}
              >
                Behind every successful courier service is a team of dedicated
                individuals who make it all possible. At K & Q Courier Service,
                our team is the heartbeat of our operations. Our couriers are
                not just delivery experts; they are your partners in ensuring
                that your parcels reach their destination with care, precision,
                and a friendly smile. We handpick and train our couriers to
                embody our values.
              </p>
              <Link to="/tracking">
                <button className="bttn">Track Package</button>
              </Link>
          </Col>
          <Col>
              <img
                src={yellow}
                className=""
                style={{ width: "100%", padding: "10px", borderRadius: "1px" }}
              />
          </Col>
        </Row>
      </Container>
      <Row
        className="5150"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={j2}
          className="imag"
          style={{
            width: "50%",
            padding: "10px",
            borderRadius: "1px",
          }}
        />
          <Container>
            <Col
              md="5"
              style={{
                fontSize: "1.3rem",
                color: "#000",
                fontWeight: "800",
              }}
            >
              <p style={{ fontSize: "1.2rem" }}>
                Every member of our team is passionate about making your
                experience with K & Q Courier Service exceptional. From our
                drivers to our customer support representatives, you can trust
                that your parcels are in capable hands. Our story is rooted in a
                commitment to punctuality and dedication to customer
                satisfaction. We've overcome challenges, grown our team, and
                expanded our reach, but our core values remain unchanged.
              </p>

              <Link to="/get-delivery-quote">
                <button className="bttn">Get Quote</button>
              </Link>
            </Col>
          </Container>
      </Row>
      {/* <Container> */}
      <Row style={{ background: "#000", height: "120vh", marginTop: "30px" }}>
        <Col md="7">
          <Container>
            <img
              src={w3}
              style={{ width: "70%", marginTop: "20px", marginBottom: "20px" }}
            />
          </Container>
        </Col>
        <Col md="5">
            <h2
              style={{ color: "aliceblue", fontSize: "1.7rem", padding: "8px" }}
            >
              Changing Lives
              <hr style={{ color: "aliceblue", height: "3px" }} />
            </h2>
            <p
              style={{
                padding: "20px",
                fontSize: "1.2rem",
                fontWeight: "500",
                color: "aliceblue",
              }}
            >
              Our mission is straightforward: to provide you with courier
              services that surpass your expectations. We believe that every
              delivery is an opportunity to build trust and exceed your
              requirements.
            </p>

            <p
              style={{
                padding: "20px",
                fontSize: "1.2rem",
                fontWeight: "500",
                color: "aliceblue",
              }}
            >
              You can rely on us to deliver your packages on time, every time.
              Your satisfaction is our driving force. We actively seek feedback
              from our clients to improve our services continually. Your
              feedback shapes our strategies and keeps us aligned with your
              evolving needs.
            </p>
        </Col>
        <hr style={{ color: "aliceblue", height: "3px" }} />

        <Col md="6">
          <Container>
            <img
              src={w1}
              style={{ width: "100%", boxShadow: "0 0 20px 1px #000" }}
            />
          </Container>
        </Col>
        <Col
          md="6"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
            <p
              style={{
                padding: "20px",
                fontSize: "1.2rem",
                fontWeight: "500",
                color: "aliceblue",
              }}
            >
              At Willy's Pet Courier Service, our love for pets runs deep. As
              fellow pet owners, we understand the significance of your furry
              companions in your life. That's why we treat every pet we
              transport as if they were our own. Our mission is to provide pets
              with a comfortable, secure, and enjoyable journey, ensuring that
              your pets arrive at their destination happy and healthy.
            </p>
        </Col>
      </Row>
      </Container>
      {/* <Sc2 /> */}
    </Styels>
  );
}

const Styels = styled.div`
  overflow-x: hidden;
  .bttn {
    width: 200px;
    height: 70px;
    margin-top: 30px;
    border-radius: 3px;
    border: none;
    background: sandybrown;
    box-shadow: 0 1rem 2rem hsl(0 0% 0% / 20%);
    font-size: 1.2rem;
    font-weight: 500;
    color: aliceblue;
    &:hover {
      opacity: 0.5;
    }
  }
  @media only screen and (min-width: 767px) {
    // .imag {
    //   display: none;
    // }
  }
`;
