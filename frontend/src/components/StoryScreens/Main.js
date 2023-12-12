import React from "react";
import styled from "styled-components";
import { Row, Container, Col } from "react-bootstrap";
// import Sc2 from "./Sc2";

import b1 from "../../Assets/b1.jpg";
import b4 from "../../Assets/b4.jpg";
import b5 from "../../Assets/b5.jpg";
import i6 from "../../Assets/i6.jpg";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <Styles>
      <Container>
        <Row>
          <Col className="cola" md="5">
            <img
              src={b4}
              style={{ width: "100%", borderRadius: "5px", padding: "5px" }}
            />
            <img
              src={b1}
              style={{ width: "50%", borderRadius: "5px", padding: "5px" }}
            />
            <img
              src={b5}
              style={{ width: "50%", borderRadius: "5px", padding: "5px" }}
            />
          </Col>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <p style={{ fontSize: "1.7rem" }}>
                <center>Welcome To K & Q Freight Service</center>
              </p>
              <p style={{ fontSize: "1.4rem", padding: "30px" }}>
                Join us on a journey of reliability, speed, and precision as we
                redefine the courier experience. Your parcels are our passion,
                and we're here to make your deliveries as smooth as can be. .
                Our mission is to provide safe and stress-free courier services,
                ensuring that your cherished parcels and packages reach their
                destination with care.
              </p>
            </div>
            <div>
              <Link to="/get-delivery-quote">
                <button className="butt">Get Delivery Quote</button>
              </Link>
              <Link to="/tracking">
                <button className="butt">Track Package</button>
              </Link>
            </div>
          </Col>
        </Row>
        <Row
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col md="5">
            <img
              src={i6}
              style={{
                width: "100%",
                boxShadow: "0 1rem 2rem hsl(0 0% 0% / 20%)",
              }}
            />
          </Col>
          <Col md="5">
            <p style={{ fontSize: "1.4rem", padding: "30px" }}>
              <font style={{ fontWeight: "700" }}>
                Get a quote to ship your pet anywhere in US or UK!
              </font>{" "}
              <br /> Stay in the know with our real-time tracking feature. Track
              your parcels from pick-up to delivery, and receive instant updates
              on their status. Our tracking technology ensures you're never left
              in the dark.We understand that every delivery is unique. That's
              why we offer tailored courier solutions to meet your specific
              needs. Whether it's a time-sensitive document, a fragile package,
              or a bulk shipment, we have the right service for you.
            </p>
            <Link to="/get-delivery-quote">
              <button className="butt" style={{ padding: "30px" }}>
                Get Started Here
              </button>
            </Link>
          </Col>
        </Row>
        {/* <Sc2 /> */}
      </Container>
    </Styles>
  );
}
const Styles = styled.div`
  margin-top: 20px;
  overflow-x: hidden;
  .butt {
    width: 200px;
    height: 75px;
    margin: 20px;
    background: sandybrown;
    font-size: 1rem;
    font-weight: 800;
    border: 1px solid white;
    box-shadow: 0 1rem 2rem hsl(0 0% 0% / 20%);
    &:hover {
      color: aliceblue;
    }
  }
`;
