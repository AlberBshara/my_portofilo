import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import scholara from "../../Assets/scholara.png";
import lama3 from "../../Assets/lama3.jpeg"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div style={{ 
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h1 className="project-heading">
            My Recent <strong className="purple">Projects</strong>
          </h1>
          <p style={{ 
            color: "white", 
            fontSize: "1rem",
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            opacity: 0.9
          }}>
            A collection of projects showcasing my expertise in AI World
          </p>
        </div>

        <Row style={{ justifyContent: "center", gap: '2rem 0' }}>
          
          <Col md={6} lg={4}>
            <ProjectCard
              imgPath={scholara}
              isBlog={false}
              title="Scholara"
              description="Scholara: A Virtual Assistant Powered by LLM, RAG, and AI Agent. Finding the right scholarship can be a timeconsuming and frustrating process. You'll likely spend hours poring over university websites, communicating with current students, and scouring the internet for information. Unfortunately, even after all that effort, there's no guarantee you'll find the perfect scholarship. That's where our AI scholar comes in. Let us handle the legwork for you, and I'll provide personalized assistance to find the most suitable scholarship for you and answer all your questions about the scholarships that interest you. I solved this by using LLM to provide a human-like when answer the students, RAG we build our own vector database to get more suitable scholarships from it based on student information and desire, also to keep our system up-to-date with all the updated information about the scholarships I built AI Web agent this helps the system to be aware about all the updates in the scholarships information, and new scholarships."
              techStack={["LLM", "Python", "RAG", "PyTorch", "Fine-tune", "langchain", "chromadb", "cuda", "expert system", "kotlin"]}
              features={[
              ]}
              ghLink="https://gitlab.com/AlberBshara/scholara_virtual_assistnat"
              demoLink="https://drive.google.com"
            />
          </Col>

               
          <Col md={6} lg={4}>
            <ProjectCard
              imgPath={lama3}
              isBlog={false}
              title="Lama3.1 Optimized for Arabic"
              description="I’ve fine-tuned the Llama3.1_8B Meta model with a context window of 128k to support Arabic Language, This means the model can handle longer texts and understand Arabic better than ever before. This model has been fine-tuned using the LoRA method, leveraging high-quality Arabic datasets. The result is a model that can handle longer context windows, enabling more comprehensive understanding and generation of text in Arabic."
              techStack={["LLM", "Python", "LoRA", "PyTorch", "Fine-tune", "unsloth", "HuggingFace", "cuda",]}
              features={[
              ]}
              ghLink="https://huggingface.co/AlberBshara"
              demoLink="https://drive.google.com"
            />
          </Col>

        

         

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;