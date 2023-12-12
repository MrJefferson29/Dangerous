import React from "react";
import styled from "styled-components";
import "../../Css/Footer.css";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import { faTruckRampBox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Styles>
      <Container style={{ padding: "65px" }}>
        <Row>
          <Col md="3">
            <Link to='/registermajiggy' style={{ textDecoration: "none" }}>
            <div className="IconWrapper">
              <FontAwesomeIcon icon={faTruckRampBox} />
            </div>
            </Link>
          </Col>
          <center>
            <Col md="9">
              <font
                style={{
                  fontSize: "2.3rem",
                  fontWeight: "600",
                  matginBottom: "25px",
                }}
              >
                K & Q Courier
              </font>
            </Col>
          </center>
        </Row>
        <Row>
          <Col md="6">
            <center>
              <p
                style={{
                  fontSize: "2.3rem",
                  fontWeight: "200",
                  color: "white",
                }}
              >
                Location
              </p>
              <div style={{ color: "burlywood", display: 'flex' }}>
                <Col>
                  <p style={{ fontSize: "1.2rem" }}>Lexington st, Soho</p>
                  <p style={{ fontSize: "1.2rem" }}>London, UK</p>
                </Col>
                <Col>
                  <p style={{ fontSize: "1.2rem" }}>Cypher st, Boston</p>
                  <p style={{ fontSize: "1.2rem" }}>Massachusetts, US</p>
                </Col>
              </div>
            </center>
          </Col>
          <Col md="4">
            <center>
              <p style={{ fontSize: "2.3rem", fontWeight: "200" }}>Contact</p>
              <NavLink
                className="lin"
                style={{ fontSize: "1.2rem", color: "burlywood" }}
              >
                +1 (843) 603-1719
              </NavLink>
              <NavLink
                to="mailto:kacourierservice@gmail.com"
                className="lin"
                style={{ fontSize: "1.2rem", color: "burlywood" }}
              >
                Gmail
              </NavLink>
             
            </center>
          </Col>
          <Col md="2">
            <p style={{ fontSize: "2.3rem", fontWeight: "200" }}>Join Us</p>
            <NavLink
              to="#"
              className="lin"
              style={{
                fontSize: "1.2rem",
                color: "burlywood",
                borderBottom: "2px solid burlywood",
                padding: "2px",
                width: "auto",
                margin: "10px",
              }}
            >
              Customer Support
            </NavLink>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
};

export default Footer;

const Styles = styled.div`
overflow-x: hidden;
  background: black;
  color: white;
  .IconWrapper {
    width: auto;
    font-size: 56px;
    color: sandybrown;
    padding-right: 20px;
    transition: transform 0.2s ease;
  }
`;
