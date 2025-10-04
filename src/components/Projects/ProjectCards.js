import React, { useState } from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsArrowRight } from "react-icons/bs";

function ProjectCards(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className={`project-card-view ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        border: '1px solid #2d2d2d',
        borderRadius: '12px',
        overflow: 'hidden',
        background: 'linear-gradient(145deg, #0a0a0a 0%, #1a1a1a 100%)',
        boxShadow: isHovered 
          ? '0 10px 30px rgba(138, 43, 226, 0.2)' 
          : '0 4px 20px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        height: '100%',
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)'
      }}
    >
      {/* Project Image - Clean and Professional */}
      <div 
        style={{ 
          position: 'relative', 
          height: '200px', 
          overflow: 'hidden',
          borderBottom: '1px solid #2d2d2d'
        }}
      >
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          style={{ 
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        {/* Simple Overlay */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            padding: '1rem',
            opacity: isHovered ? 1 : 0.8,
            transition: 'opacity 0.3s ease'
          }}
        >
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {props.ghLink && (
              <Button 
                variant="outline-light" 
                href={props.ghLink} 
                target="_blank"
                size="sm"
                style={{
                  borderRadius: '6px',
                  border: '1px solid rgba(255,255,255,0.3)',
                  background: 'rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.8rem',
                  padding: '0.3rem 0.8rem'
                }}
              >
                <BsGithub /> Code
              </Button>
            )}
            {props.demoLink && !props.isBlog && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                size="sm"
                style={{
                  borderRadius: '6px',
                  background: 'linear-gradient(45deg, #8a2be2, #6a0dad)',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.8rem',
                  padding: '0.3rem 0.8rem'
                }}
              >
                <CgWebsite /> Demo
              </Button>
            )}
          </div>
        </div>
      </div>

      <Card.Body style={{ 
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100% - 200px)'
      }}>
        {/* Project Title */}
        <Card.Title style={{ 
          fontSize: '1.3rem',
          fontWeight: '600',
          color: '#ffffff',
          marginBottom: '0.8rem',
          lineHeight: '1.4'
        }}>
          {props.title}
        </Card.Title>

        {/* Project Description */}
        <Card.Text style={{ 
          color: '#b0b0b0',
          fontSize: '0.9rem',
          lineHeight: '1.6',
          marginBottom: '1.2rem',
          flexGrow: 1
        }}>
          {props.description}
        </Card.Text>

        {/* Tech Stack Badges */}
        {/* Tech Stack Badges - Modern Purple Style */}
        {props.techStack && (
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '0.4rem', 
            marginBottom: '1.2rem' 
          }}>
            {props.techStack.map((tech, index) => (
              <Badge 
                key={index}
                style={{
                  background: 'linear-gradient(135deg, #8a2be2 0%, #6a0dad 50%, #9400d3 100%)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.4rem 0.8rem',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  boxShadow: '0 4px 12px rgba(138, 43, 226, 0.3)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #9400d3 0%, #8a2be2 50%, #6a0dad 100%)';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 16px rgba(138, 43, 226, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #8a2be2 0%, #6a0dad 50%, #9400d3 100%)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 12px rgba(138, 43, 226, 0.3)';
                }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}

        {/* Project Features - Clean List */}
        {props.features && (
          <div style={{ marginBottom: '1.5rem' }}>
            <h6 style={{ 
              color: '#ffffff', 
              fontSize: '0.85rem',
              fontWeight: '600',
              marginBottom: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              . 
            </h6>
            <ul style={{ 
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {props.features.slice(0, 3).map((feature, index) => (
                <li 
                  key={index}
                  style={{
                    color: '#d0d0d0',
                    fontSize: '0.8rem',
                    marginBottom: '0.3rem',
                    paddingLeft: '0.8rem',
                    position: 'relative',
                    lineHeight: '1.4'
                  }}
                >
                  <span style={{
                    color: '#8a2be2',
                    position: 'absolute',
                    left: 0,
                    fontWeight: 'bold'
                  }}>•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Button */}
        <div style={{ marginTop: 'auto', display: 'flex', gap: '0.5rem' }}>
          {props.demoLink && !props.isBlog && (
            <Button 
              variant="primary" 
              href={props.demoLink} 
              target="_blank"
              style={{
                background: 'linear-gradient(45deg, #8a2be2, #6a0dad)',
                border: 'none',
                borderRadius: '6px',
                padding: '0.5rem 1rem',
                fontWeight: '500',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
                flex: 1,
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 5px 15px rgba(138, 43, 226, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              View Project <BsArrowRight />
            </Button>
          )}
          {props.ghLink && (
            <Button 
              variant="outline-secondary" 
              href={props.ghLink} 
              target="_blank"
              style={{
                border: '1px solid #444',
                borderRadius: '6px',
                padding: '0.5rem 0.8rem',
                fontWeight: '500',
                fontSize: '0.85rem',
                color: '#b0b0b0',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                transition: 'all 0.3s ease',
                background: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#2d2d2d';
                e.target.style.borderColor = '#8a2be2';
                e.target.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.borderColor = '#444';
                e.target.style.color = '#b0b0b0';
              }}
            >
              <BsGithub />
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;