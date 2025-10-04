import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGooglecolab,
  SiJupyter,
  SiAnaconda,
  SiGitlab,
  SiSlack,
  SiFigma,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <SiVisualstudiocode />, name: "VS Code", description: "Primary Code Editor" },
    { icon: <SiGooglecolab />, name: "Colab", description: "Cloud ML Development" },
    { icon: <SiJupyter />, name: "Jupyter", description: "Data Analysis & Research" },
    { icon: <SiAnaconda />, name: "Anaconda", description: "Python Environment" },
    { icon: <SiPostman />, name: "Postman", description: "API Development" },
    { icon: <SiGitlab />, name: "GitLab", description: "Version Control" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <div className="tool-icon-wrapper">
            {tool.icon}
            <div className="tool-info">
              <div className="tool-name">{tool.name}</div>
              <div className="tool-description">{tool.description}</div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;