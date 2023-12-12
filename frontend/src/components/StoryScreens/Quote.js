import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import i1 from "../../Assets/i1.jpg";
import i2 from "../../Assets/i2.jpg";
import i3 from "../../Assets/i3.avif";
import i4 from "../../Assets/i4.avif";

export default function Quote() {
  return (
    <Styles>
      <Container>
        <Row>
          <Col md="4">
            <img src={i4} style={{ width: "100%", borderRadius: "7px", boxShadow: '0 1rem 2rem hsl(0 0% 0% / 20%)' }} />
            <img
              src={i2}
              style={{ width: "100%", marginTop: "30px", borderRadius: "7px", boxShadow: '0 1rem 2rem hsl(0 0% 0% / 20%)' }}
            />
          </Col>
          <Col md="4">
            <img src={i3} style={{ width: "100%", borderRadius: "7px", boxShadow: '0 1rem 2rem hsl(0 0% 0% / 20%)' }} />
          </Col>
          <Col md="4">
            <img src={i1} style={{ width: "100%", borderRadius: "7px", boxShadow: '0 1rem 2rem hsl(0 0% 0% / 20%)' }} />
          </Col>
        </Row>
        <Row style={{ marginTop: "30px" }}>
          <Col md="6">
            <div>
              <details open>
                <summary>Reliable Pet Transport</summary>
                <div>
                  When it comes to transporting your pets, trust is of utmost
                  importance. At K & Q, we offer reliable door-to-door pet
                  transport services that allow both you and your furry friend
                  to rest easy. We know that your pet's well-being is your
                  priority, and it's ours too.
                </div>
              </details>
              <details>
                <summary>Safety First</summary>
                <div>
                  Your pet's safety is non-negotiable. Our specialized vehicles
                  are equipped for secure and comfortable pet travel. From
                  temperature control to secure enclosures, we leave no stone
                  unturned in ensuring that your pet has a safe and stress-free
                  journey.
                </div>
              </details>
              <details>
                <summary>Experienced Team</summary>
                <div>
                  Our dedicated team comprises experienced pet handlers who are
                  not only professionals but also pet lovers. They have the
                  knowledge and expertise needed to make every pet's travel
                  experience as smooth and comfortable as possible.
                </div>
              </details>
              <details>
                <summary>Transparent Pricing</summary>
                <div>
                  We believe in transparency. Our pricing is upfront and
                  competitive. With K & Q, there are no hidden fees or surprises.
                  You'll always know exactly what to expect.
                </div>
              </details>
              <details>
                <summary>Trust the Pet Transport Experts</summary>
                <div>
                  When it comes to pet transport, trust the experts at K & Q to
                  care for your furry, feathery, or scaly family members. We're
                  passionate about pets, and our commitment to their well-being
                  is at the heart of everything we do.
                </div>
              </details>
            </div>
          </Col>
          <Col
            md="6"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: "1.3rem" }}>
              To get quote for you, or for your custom freight requirements,
              contact us through our customer support on the message icon at the
              bottom-right of your screen, we will write to you in less than no
              time. If you already have a quote nd would like to know of it's
              whereabouts, navigate to the Track Package section, and provide
              the Courier ID of your package. fter doing so, contact us via
              customer support regarding what you should do next.
            </p>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
}

const Styles = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");

  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  :root {
    font-size: 16px;
  }

  *:focus {
    outline: none;
  }

  body > div {
    width: 90%;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  details div {
    border-left: 2px solid #000;
    border-right: 2px solid #000;
    border-bottom: 2px solid #000;
    padding: 1.5em;
  }

  details div > * + * {
    margin-top: 1.5em;
  }

  details + details {
    margin-top: 0.5rem;
  }

  summary {
    list-style: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary {
    font-size: 1.1rem;
    font-weight: 800;
    border: 2px solid #000;
    padding: 0.75em 1em;
    cursor: pointer;
    position: relative;
    padding-left: calc(1.75rem + 0.75rem + 0.75rem);
  }

  summary:before {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0.75rem;
    content: "↓";
    width: 1.75rem;
    height: 1.75rem;
    background-color: sandybrown;
    color: black;
    font-weight: 900;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  details[open] summary {
    background-color: #eee;
  }

  details[open] summary:before {
    content: "↑";
  }

  summary:hover {
    background-color: #eee;
  }

  a {
    color: inherit;
    font-weight: 600;
    text-decoration: none;
    box-shadow: 0 1px 0 0;
  }

  a:hover {
    box-shadow: 0 3px 0 0;
  }

  code {
    font-family: monospace;
    font-weight: 600;
  }
  .shift {
    position: relative;
    top: 20vh;
  }
`;
