import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaKaggle, FaLinkedinIn, FaTelegram, FaResearchgate } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              TRANSFORMING DATA INTO <span className="purple">INTELLIGENT SOLUTIONS</span>
            </h1>
            <p className="home-about-body">
              As a passionate <b className="purple">AI Engineer & Data Scientist</b>, 
              I specialize in bridging the gap between theoretical machine learning 
              and practical, impactful applications.
              <br />
              <br />
              
              My expertise spans across:
              <br />
              <i>
                <b className="purple">• Deep Learning & Neural Architectures</b>
                <br />
                <b className="purple">• Computer Vision & NLP Systems</b>
                <br />
                <b className="purple">• Large Language Models & Generative AI</b>
                <br />
                <b className="purple">• Statistical Modeling, Data Pipeline Engineering, & Data Analysis</b>
              </i>
              <br />
              <br />

              I thrive on solving complex problems through:
              <br />
              <i>
                <b className="purple">• Research-driven AI innovation</b>
                <br />
                <b className="purple">• Scalable ML system design</b>
                <br />
                <b className="purple">• Data-intensive computational solutions</b>
              </i>
              <br />
              <br />

              Currently pushing boundaries in <b className="purple">AI research</b> while 
              developing production-ready systems that deliver measurable business impact 
              and advance the field of artificial intelligence.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <div style={{ 
                padding: '30px', 
                textAlign: 'center',
                background: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 50%, #5b21b6 100%)',
                borderRadius: '20px',
                boxShadow: `
                  0 10px 30px rgba(124, 58, 237, 0.4),
                  0 4px 12px rgba(124, 58, 237, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.2)
                `,
                border: '1px solid rgba(255, 255, 255, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Water effect overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `
                    radial-gradient(circle at 20% 80%, rgba(167, 139, 250, 0.3) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.2) 0%, transparent 50%),
                    radial-gradient(circle at 40% 40%, rgba(91, 33, 182, 0.15) 0%, transparent 50%)
                  `,
                  pointerEvents: 'none'
                }} />
                
                <h4 style={{ 
                  color: 'white', 
                  marginBottom: '25px',
                  fontWeight: '600',
                  fontSize: '1.4em',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  position: 'relative',
                  zIndex: 1
                }}>
                  ⚡AI & DATA SCIENCE FOCUS
                </h4>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr', 
                  gap: '12px',
                  color: 'white',
                  fontSize: '0.95em',
                  position: 'relative',
                  zIndex: 1
                }}>
                  <div style={{
                    padding: '8px 12px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>Deep Learning</div>
                  <div style={{
                    padding: '8px 12px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>GenAI</div>
                  <div style={{
                    padding: '8px 12px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>Data Mining</div>
                  <div style={{
                    padding: '8px 12px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>Research</div>
                  <div style={{
                    padding: '8px 12px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>ML Systems</div>
                  <div style={{
                    padding: '8px 12px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>Math & Stats</div>
                  <div style={{
                    padding: '8px 12px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>AI Engineering</div>
                  <div style={{
                    padding: '8px 12px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>Optimization</div>
                       <div style={{
                    padding: '8px 12px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>Big Data</div>
                  
                  
                  <div style={{
                    padding: '8px 12px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>NLP</div>

                  <div style={{
                    padding: '8px 12px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>Computer Vision</div>

                  <div style={{
                    padding: '8px 12px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>Software Engineering</div>

                </div>
                
                {/* Subtle glow effect */}
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'radial-gradient(circle, rgba(167, 139, 250, 0.1) 0%, transparent 70%)',
                  animation: 'float 6s ease-in-out infinite',
                  pointerEvents: 'none'
                }} />
              </div>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
            <p>
              Explore my projects, and contributions to the AI community
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://gitlab.com/AlberBshara/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="GitHub - Code & Projects"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/alber-bshara-544505224/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="LinkedIn - Professional Profile"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.kaggle.com/alberbshara"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="Kaggle - Data Science Competitions"
                >
                  <FaKaggle />
                </a>
              </li>

             <li className="social-icons">
                <a
                  href="https://t.me/neptoneai"  
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="Telegram Channel - AI & Data Science Insights"
                >
                  <FaTelegram />
                </a>
              </li>


              <li className="social-icons">
                <a
                  href="https://scholar.google.com" // Replace with your actual Google Scholar link
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="Google Scholar - Research Papers"
                >
                  <SiGooglescholar />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.researchgate.net" // Replace with your actual ResearchGate link
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="ResearchGate - Scientific Collaboration"
                >
                  <FaResearchgate />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;