import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import BubbleBackground from "../BubbleBackground";
import BrainNetwork from "../BrainNetwork"; // Import the new component
import MeteorBackground from "../MeteorBackground"; // Changed from BubbleBackground

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <MeteorBackground />
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Alber Bshara </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '400px' }}>
              <BrainNetwork />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;