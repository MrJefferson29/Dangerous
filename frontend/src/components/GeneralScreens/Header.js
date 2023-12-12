import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Css/Header.css";
import { AuthContext } from "../../Context/AuthContext";
import { Nav, Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import { faDollyBox } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const bool = localStorage.getItem("authToken") ? true : false;
  const [auth, setAuth] = useState(bool);
  const { activeUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setAuth(bool);
    setTimeout(() => {
      setLoading(false);
    }, 1600);
  }, [bool]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <Styles>
      <Navbar collapseOnSelect expand="lg" className="navy" >
        <Container >
          <Navbar.Brand href="/">
            <div className="IconWrapper">
              <FontAwesomeIcon icon={faDollyBox} />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ position: "relative", background: "aliceblue" }}
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            sticky="top"
            className="justify-content-end"
          >
            <Nav className="justify-content-end">
              <Link
                className="link"
                to="/"
                style={{ color: "aliceblue" }}
              >
                HOME
              </Link>
              <Link
                className="link"
                to="/tracking"
                style={{ color: "aliceblue" }}
              >
                TRACK PACKAGE
              </Link>
              {auth ? (
                <Link
                  className="link"
                  to="/addstory"
                  style={{ color: "aliceblue" }}
                >
                  NEW PACKAGE
                </Link>
              ) : (
                <></>
              )}
              <Link
                className="link"
                to="/about"
                style={{ color: "aliceblue" }}
              >
                ABOUT US
              </Link>
              <Link
                className="link"
                to="/get-delivery-quote"
                style={{ color: "aliceblue" }}
              >
                GET QUOTE
              </Link>
              <Link
                className="link"
                to="/terms-and-privacy-policy"
                style={{ color: "aliceblue" }}
              >
                OUR POLICIES
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Styles>
  );
};

export default Header;

const Styles = styled.div`
  // height: 200px;
  .IconWrapper {
    font-size: 56px;
    color: sandybrown;
    padding-right: 20px;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
  .link {
    font-size: 1.2rem;
    text-decoration: none;
    font-weight: bold;
    color: aliceblue;
    margin-left: 45px;
  }
  .eor {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
