import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { FaBrain, AiOutlineRocket, GiArtificialIntelligence } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view modern-card">
      <Card.Body>
        <div className="card-header">
          <div className="header-icon">
            🚀
          </div>
          <div className="header-text">
            <h3>AI Engineer & Data Scientist</h3>
            <p>Driving Innovation Through Intelligent Systems</p>
          </div>
        </div>
        
        <div className="about-content">
          <p style={{ textAlign: "justify" }}>
            I'm <span className="purple">Yassin Abdulmahdi</span>, a passionate 
            <span className="purple"> AI Engineer and Data Scientist </span>
            from <span className="purple">Damascus, Syria</span>.
            <br /><br />
            With a Bachelor's degree in Information Technology Engineering from Damascus University,
            I specialize in creating intelligent systems that solve complex real-world problems
            through cutting-edge machine learning and data-driven approaches.
          </p>
          
          <div className="expertise-areas">
            <h5>Primary Focus Areas:</h5>
            <div className="expertise-grid">
              <div className="expertise-item">
                <div className="expertise-icon">🧠</div>
                <span>Deep Learning</span>
              </div>
              <div className="expertise-item">
                <div className="expertise-icon">📊</div>
                <span>Data Analysis</span>
              </div>
              <div className="expertise-item">
                <div className="expertise-icon">🤖</div>
                <span>Machine Learning</span>
              </div>
              <div className="expertise-item">
                <div className="expertise-icon">🔬</div>
                <span>AI Research</span>
              </div>
            </div>
          </div>

          <div className="opportunities-section">
            <h5>Seeking Opportunities in:</h5>
            <ul>
              <li className="about-activity">
                <ImPointRight /> <strong>AI Engineering & Development</strong>
              </li>
              <li className="about-activity">
                <ImPointRight /> <strong>Machine Learning Research</strong>
              </li>
              <li className="about-activity">
                <ImPointRight /> <strong>Data Science & Analytics</strong>
              </li>
              <li className="about-activity">
                <ImPointRight /> <strong>Computer Vision & NLP</strong>
              </li>
            </ul>
          </div>

          <div className="quote-section">
            <p style={{ color: "rgb(155 126 172)", fontStyle: "italic" }}>
              "Engineering intelligent solutions that transform data into actionable insights 
              and create meaningful impact through artificial intelligence."
            </p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;