import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCards";
import Particle from "../Particle";
import tp from "../../Assets/Experiences/truepositive_tech_logo.jpeg";
import prokoders from "../../Assets/prokoders.png";
import credom_it_logo from "../../Assets/credom_it_logo.jpeg";
import omdena from "../../Assets/Experiences/omdena.jpeg";



function Experiences() {
  const experiences = [
    {
      imgPath: tp,
      title: "Data Scientist at TruePositive",
      description: `  At TruePositive, I worked on high-impact AI and Data Science initiatives that transformed large-scale telecom data into actionable business intelligence.
      Some of My contributions included:

      • Built and deployed AI systems on Big telecom datas, using PySpark, duckdb, Presto, SQL, Pandas, like hybrid deep learning architectures (LSTM + Transformer) for subscriber activity prediction.  
      • Developed anomaly detection pipelines with deep autoencoders in PyTorch to identify non-human usage patterns, improving etwork integrity.  
      • Designed Human Detection scoring system leveraging IMEI-MSISDN patterns, device metadata, and subscriber mobility using Graph Neural Networks, VAEs.  
      • (Talk with GraphDB) Engineered graph databases in Neo4j, integrating with LLMs and dashboards to allow natural language querying and analysis of telecom data.
      • Researched and productioned AI-driven dynamic pricing systems for telecom bundles (minutes, megabytes, and SMS) using DL Model, and Math formula.
      • Conducted Market Basket Analysis and Social Network Analysis to uncover customer behavior, top influencers, and hidden usage patterns.  
      • Building CVM system with ETL pipline using airflow and AI Models for MTN Congo.
      • implementing Advance and powerful data visualiztion & Analysis dashboards for a lot projects.

      • These projects combined cutting-edge AI research with production-ready deployment, creating measurable business value and solidifying my role as a core contributor to TruePositive data-driven innovation strategy.
      `,
      date: "Jan,2025 – Present. UAE-Dubai",
      demoLink: "https://www.linkedin.com/company/truepositive-tech/posts/?feedView=all"
    },
    {
      imgPath: prokoders,
      title: "AI Engineer at Prokoders",
      description: ` At Prokoder, I worked on high-impact AI initiatives that transformed Ideas into actionable intelligence systems.
      Some of My contributions included:

      • Universal Website Chatbot with RAG, developed an end-to-end system using a local LLM (Llama 3.1) and ChromaDB to enable 
      conversational AI for any website. Engineered a automated pipeline that, given a base URL, crawls, scrapes, and processes 
      website content to build a Retrieval-Augmented Generation (RAG) database. Just enter Base URL then start chatting.

      • AI-Powered, SEO-Optimized Website Generator, Contributed a core service to a larger platform that automatically generates fully 
      optimized, single-page websites designed to rank at the top of search engine results. Developed an AI-driven engine that translates 
      user inputs from structured forms into high-quality, search-engine-optimized content and structure, significantly simplifying the
      web development process.

      • Dynamic Pricing Engine Using Evolutionary Algorithms Led research and development of a dynamic pricing model 
      utilizing evolutionary optimization algorithms, like Bee Colony Optimization.Innovated and rigorously tested up to
      six hybrid optimizer algorithms to enhance pricing strategy efficiency and adaptability.

      • AI-Powered Personalized Learning Assistant, Built an intelligent educational tool leveraging RAG and LLM to act as a personalized teacher for students.

      • AI-Driven HR Recruitment Module Implemented a key component of an HR system designed to automate the initial screening 
      of job applications. Developed an AI model to analyze and match candidate resumes with job descriptions, automatically
       ranking applicants from most to least suitable to streamline the recruitment workflow.
      
      `,
      date: "Aug,2024 – Mar,2025.  UAE-Sharjah",
      demoLink: "https://prokoders.com/en"
    },
    {
      imgPath: omdena,
      title: "Intern AI Engineer at Omdena",
      description: `Contributed as a volunteer in the Omdena Urban Farming Challange Omdena-Milan, actively involved in the development of AI system
      to identify potentioal areas for Urban Agriculture in Milan, Italy. This project uses satellite imagery, climate data, and machine learning to identify
      the most suitable locations and crops for urban agriculture in Milan, while also developing a smart pest management system to 
      ensure sustainable and productive urban farming.`,
      date: "May,2024 – Jul,2024. USA",
      demoLink: "https://www.omdena.com/"
    },
       {
      imgPath: credom_it_logo,
      title: "Android Developer at Credom",
      description: `Building native Android Applications using Java & XML and modren approach of kotlin & Jetpack-compose`,
      date: "Nov,2021 – Jan,2023. Syria, Damascus",
      demoLink: "https://www.linkedin.com/company/credom-it/posts/?feedView=all"
    }
    // here add more work Experinces 
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Professional <strong className="purple">Journey</strong>
        </h1>
        <p style={{ color: "white", marginBottom: "50px" }}>
          A timeline of my career progression and experiences
        </p>
        
        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              imgPath={exp.imgPath}
              title={exp.title}
              description={exp.description}
              date={exp.date}
              demoLink={exp.demoLink}
            />
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Experiences;