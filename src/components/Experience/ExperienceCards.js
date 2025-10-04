import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import "./ExperienceCards.css";

function ExperienceCards(props) {
  return (
    <div className="timeline-item">
      <div className="timeline-marker"></div>
      <Card className="experience-card-view">
        <div className="company-logo-container">
          <Card.Img
            variant="top"
            src={props.imgPath}
            alt="card-img"
            className="company-logo"
          />
        </div>
        <Card.Body>
          <div className="experience-header">
            <Card.Title className="experience-title">{props.title}</Card.Title>
            <div className="experience-date">{props.date}</div>
          </div>
          <Card.Text className="experience-description">
            {props.description.split('•').map((point, index) => (
              point.trim() && (
                <div key={index} className="experience-point">
                  <span className="bullet-point">•</span>
                  {point.trim()}
                </div>
              )
            ))}
          </Card.Text>
          
          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="experience-button"
            >
              <CgWebsite /> &nbsp;
              {"Website"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default ExperienceCards;