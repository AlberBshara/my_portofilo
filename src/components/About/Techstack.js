import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiDart,
} from "react-icons/di";
import {
  SiFirebase,
  SiFlutter,
  SiOpencv,
  SiPytorch,
  SiScikitlearn,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";

function Techstack() {
  const techCategories = [
    {
      title: "AI & Machine Learning",
      items: [
        { icon: <SiTensorflow />, name: "TensorFlow" },
        { icon: <SiPytorch />, name: "PyTorch" },
        { icon: <SiScikitlearn />, name: "Scikit-learn" },
        { icon: <SiOpencv />, name: "OpenCV" },
        { icon: <SiPandas />, name: "Pandas" },
        { icon: <SiNumpy />, name: "NumPy" },
      ]
    },
    {
      title: "Programming Languages",
      items: [
        { icon: <DiPython />, name: "Python" },
        { icon: <CgCPlusPlus />, name: "C++" },
        { icon: <DiJavascript1 />, name: "JavaScript" },
        { icon: <DiDart />, name: "Dart" },
      ]
    },
    {
      title: "Development & Tools",
      items: [
        { icon: <DiReact />, name: "React" },
        { icon: <SiFlutter />, name: "Flutter" },
        { icon: <DiGit />, name: "Git" },
        { icon: <SiDocker />, name: "Docker" },
        { icon: <SiKubernetes />, name: "Kubernetes" },
        { icon: <SiFirebase />, name: "Firebase" },
      ]
    }
  ];

  return (
    <div className="techstack-container">
      {techCategories.map((category, index) => (
        <div key={index} className="tech-category">
          <h4 className="category-title">{category.title}</h4>
          <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
            {category.items.map((tech, techIndex) => (
              <Col xs={4} md={2} className="tech-icons" key={techIndex}>
                <div className="tech-icon-wrapper">
                  {tech.icon}
                  <div className="tech-tooltip">{tech.name}</div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
}

export default Techstack;