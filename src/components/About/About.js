import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "./About.css";

// Import your images
import universityLogo from "../../Assets/damascus-university-logo.png";
import mlCert from "../../Assets/damascus-university-logo.png";
import dsCert from "../../Assets/damascus-university-logo.png";
import dlCert from "../../Assets/damascus-university-logo.png";
import StanfordUniversity from "../../Assets/Stanford-University.png";
import deepl from "../../Assets/deepl.jpg";
import albertauni from "../../Assets/UniversityofAlberta-logo.jpg";
import meta from "../../Assets/meta.jpeg"

function About() {
  const scrollRefs = useRef([]);

  const scrollLeft = (categoryIndex) => {
    if (scrollRefs.current[categoryIndex]) {
      scrollRefs.current[categoryIndex].scrollBy({ 
        left: -300, 
        behavior: 'smooth' 
      });
    }
  };

  const scrollRight = (categoryIndex) => {
    if (scrollRefs.current[categoryIndex]) {
      scrollRefs.current[categoryIndex].scrollBy({ 
        left: 300, 
        behavior: 'smooth' 
      });
    }
  };

  const certifications = [
    {
      image: StanfordUniversity,
      title: "Machine Learning Specialization. (3 Courses)",
      issuer: "DeepLearning.AI & Stanford University",
      date: "Completed Jun 2023",
      description: "This foundational program provided a comprehensive understanding of core machine learning principles and practical implementation. Key topics mastered include Supervised Learning, Model Evaluation, Error Analysis, Regularization, Gradient Descent, Bias/Variance, Unsupervised Learning, Recommender System, and Reinforcement learning.",
      skills: ["Neural Networks", "TensorFlow", "Python", "Scikit-learn", "ML Algorithms"],
      badge: "✅ Professional",
      certificateUrl: "https://coursera.org/verify/machine-learning-specialization",
      credentialUrl: "https://coursera.org/share/c4fe73b96fb810bf8f250e47bac5fb1f"
    },
    {
      image: deepl,
      title: "Math for Machine Learning Specialization. (3 Courses)",
      issuer: "DeepLearning.AI at Coursera",
      date: "Completed 2023",
      description: "This specialization provided the essential mathematical foundation required to understand and develop machine learning algorithms. Key mathematical concepts mastered include: Linear Algebra, Multivariate Calculus, Principal Component Analysis, Optimization.",
      skills: ["Python", "Pandas", "Machine Learning", "numpy", "math"],
      badge: "Professional",
      certificateUrl: "",
      credentialUrl: ""
    },
    {
      image: deepl,
      title: "Natural Language Processing Specialization. (4 Courses)",
      issuer: "DeepLearning.AI at Coursera",
      date: "Completed Jan 2024",
      description: "This specialization provided a comprehensive understanding of NLP, include Natural Language Processing with Classification and Vector Spaces, Natural Language Processing with Probabilistic Models, Sequence Models, NER using RNNs, LSTM, Siamese Networks, Attention Model, and Transformer architecture.",
      skills: ["Deep Learning", "LSTM", "RNN", "TensorFlow", "Keras", "PyTorch", "HF", "Transformer"],
      badge: "✅ Advanced",
      certificateUrl: "https://coursera.org/share/29738d8ef9e87e2726b1b3e1d728ae26",
      credentialUrl: "https://coursera.org/share/29738d8ef9e87e2726b1b3e1d728ae26"
    },
    {
      image: deepl,
      title: "Generative Adversarial Networks Specialization. (3 Courses)",
      issuer: "DeepLearning.AI at Coursera",
      date: "Completed May 2025",
      description: "This specialization provided a comprehensive, hands-on mastery of building and evaluating various GANs  architectures. Key models and concepts mastered include: GAN Fundamentals, Deep Convolutional GANs (DCGANs), Wasserstein GANs (WGANs), Gradient Penalty (WGAN-GP), Conditional GANs (cGANs), GAN Evaluatio like FID, and StyleGAN.",
      skills: ["Deep Learning", "GANs", "PyTorch"],
      badge: "✅ Advanced",
      certificateUrl: "https://www.coursera.org/account/accomplishments/specialization/659YLSZIQEUB",
      credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/659YLSZIQEUB"
    },
    {
      image: deepl,
      title: "Deep Learning Specialization. (5 Courses)",
      issuer: "DeepLearning.AI at Coursera",
      date: "Completed May 2025",
      description: "This specialization provided a comprehensive, hands-on mastery of building and deploying modern deep neural networks. Key architectures and concepts mastered include: Neural Networks and Deep Learning, Hyperparameter Tuning, Regularization, and Optimization, Structuring Machine Learning Projects, Convolutional Neural Networks, ResNet, Sequence Models, RNNs, and LSTMs.",
      skills: ["Deep Learning", "RNN","CNNs", "ML Systems", "TensorFlow"],
      badge: "✅ Advanced",
      certificateUrl: "",
      credentialUrl: ""
    },
    {
      image: deepl,
      title: "MLops (Machine Learning Operations) Specialization. (4 Courses)",
      issuer: "DeepLearning.AI at Coursera",
      date: "Completed 3 courses out of 4, 2024",
      description: "his specialization provided a comprehensive understanding of deploying, managing, and maintaining machine learning models in production. Key concepts and tools mastered include:MLOps Fundamentals, Model Deployment, TensorFlow Extended, Data and Model Pipelines, Model Management and Versioning, and Performance Monitoring.",
      skills: ["AutoML", "Google Cloud","Deploy Models", "TFX", "TensorFlow", "Pipelines", "MLMD"],
      badge: "Professional",
      certificateUrl: "",
      credentialUrl: ""
    },
    {
      image: albertauni,
      title: "Software Design and Architecture Specialization. (4 Courses)",
      issuer: "University of Alberta at Coursera",
      date: "Completed 2021",
      description: "This specialization provided a comprehensive understanding of the principles and methods for designing robust, scalable, and maintainable software systems. Key concepts and skills mastered include: ware Design Principles, Architectural Styles & Patterns, Layered Architecture, Client-Server, Service-Oriented Architecture (SOA), Application Architecture, UML, and Object-Oriented Design.",
      skills: ["Coupling, Cohesion", "MVC","Layered Architecture", "Client-Server", "OOD", "UML", "Java"],
      badge: "✅ Professional",
      certificateUrl: "",
      credentialUrl: ""
    },
    {
      image: meta,
      title: "Meta Android developer Specialization. (11 Courses)",
      issuer: "Meta at Coursera",
      date: "Completed 2023",
      description: "This program provided a comprehensive, project-based mastery of building production-ready Android applications. Key technologies and concepts mastered include: Kotlin for Android, Software Design Principles, Data Persistence & Networking, Dependency Injection, Repository Pattern, UI/UX Implementation, and  local databases.",
      skills: ["Kotlin", "Jetpack-Compose","MVVM ", "UI UX", "DIs", "Retrofit", "Java", "Room"],
      badge: "✅ Professional",
      certificateUrl: "https://coursera.org/share/321669de97a882570e7d02a6cbdf70e5",
      credentialUrl: "https://coursera.org/share/321669de97a882570e7d02a6cbdf70e5"
    },
  ];

  // Function to handle certificate button clicks
  const handleCertificateClick = (url) => {
    console.log("Opening certificate URL:", url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Function to handle credential verification clicks
  const handleCredentialClick = (url) => {
    console.log("Opening credential URL:", url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Container fluid className="about-section">
      <Particle />
      
      {/* Hero Section */}
      <section className="education-hero">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="hero-content fade-in-up">
                <div className="hero-badge pulse">AI Engineer & Data Scientist</div>
                <h1 className="hero-title">
                  Educational Excellence
                </h1>
                <p className="hero-subtitle">
                  Building strong academic foundations in Information Technology Engineering 
                  with specialized focus on Artificial Intelligence and Data Science.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* University Section */}
      <section className="university-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="university-card">
                <div className="university-header">
                  <img 
                    src={universityLogo} 
                    alt="Damascus University" 
                    className="university-logo"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/120x120/8A2BE2/white?text=DU';
                    }}
                  />
                  <div className="university-info">
                    <h1 className="university-name">Bachelor of Artificial Intelligence Engineering</h1>
                    <div className="university-degree">
                        Damascus University
                    </div>
                    <div className="university-period">2021 - 2026</div>
                  </div>
                </div>
                
                <div className="university-details">
                  <p>
                    Comprehensive 5-year engineering program focusing on software development, 
                    artificial intelligence, and data systems. The curriculum provided strong 
                    theoretical foundations combined with practical applications in modern 
                    technologies. (first 3 years for Computer science then the last 2 years for AI specialization)
                  </p>
                  <p>
                    Specialized in machine learning algorithms, data structures, software architecture, 
                    and completed advanced projects in AI and data science domains.
                  </p>
                </div>

                {/* Curriculum Highlights */}
                <div className="curriculum-section">
                  <h3 className="curriculum-title">Key Curriculum Areas</h3>
                  <div className="curriculum-grid">
                    <div className="curriculum-item">
                      <h4>
                        <span className="curriculum-icon"></span>
                        Artificial Intelligence
                      </h4>
                      <ul>
                        <li>Machine Learning Algorithms</li>
                        <li>Neural Networks & Deep Learning</li>
                        <li>Natural Language Processing</li>
                        <li>Computer Vision</li>
                      </ul>
                    </div>
                    <div className="curriculum-item">
                      <h4>
                        <span className="curriculum-icon"></span>
                        Data Science
                      </h4>
                      <ul>
                        <li>Data Analysis & Visualization</li>
                        <li>Statistical Modeling</li>
                        <li>Big Data Technologies</li>
                        <li>Database Systems</li>
                        <li>Data Mining</li>
                      </ul>
                    </div>
                    <div className="curriculum-item">
                      <h4>
                        <span className="curriculum-icon"></span>
                        Software Engineering
                      </h4>
                      <ul>
                        <li>Software Architecture</li>
                        <li>System Design</li>
                        <li>Algorithms & Data Structures</li>
                        <li>Project Management</li>
                        <li>Math & Physics</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Certifications Section */}
      <section className="certifications-showcase">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="hero-content">
                <div className="hero-badge pulse">Professional Development</div>
                <h1 className="hero-title">Certifications & Specializations</h1>
                <p className="hero-subtitle">
                  Continuous learning through world-class professional certifications and 
                  specializations in cutting-edge AI and Data Science technologies.
                </p>
              </div>
            </Col>
          </Row>

          <div className="showcase-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card fade-in-up">
                <div className="certification-badge">{cert.badge}</div>
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="certification-image"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/80x80/8A2BE2/white?text=${cert.badge.charAt(0)}`;
                  }}
                />
                <h3 className="certification-title">{cert.title}</h3>
                <div className="certification-issuer">{cert.issuer}</div>
                <div className="certification-date">{cert.date}</div>
                <p className="certification-description">{cert.description}</p>
                
                <div className="certification-actions">
                  <button
                    onClick={() => handleCertificateClick(cert.certificateUrl)}
                    className="cert-btn cert-btn-primary"
                    type="button"
                  >
                  View Certificate
                  </button>
                  <button
                    onClick={() => handleCredentialClick(cert.credentialUrl)}
                    className="cert-btn cert-btn-secondary"
                    type="button"
                  >
                  Verify Credential
                  </button>
                </div>

                <div className="certification-skills">
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Technologies Section */}
      <section className="technologies-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="hero-content">
                <div className="hero-badge pulse">Technical Expertise</div>
                <h1 className="hero-title">Technologies & Tools</h1>
                <p className="hero-subtitle">
                  Proficient in a comprehensive stack of modern technologies for AI, 
                  data science, and software development.
                </p>
              </div>
            </Col>
          </Row>

          {/* Horizontal Scrollable Technologies with Buttons */}
          <div className="tech-scroll-container">
            {/* Programming Languages */}
            <div className="tech-category">
              <h3 className="tech-category-title">Programming Languages</h3>
              <div className="tech-scroll-wrapper">
                <button 
                  className="scroll-btn scroll-btn-left"
                  onClick={() => scrollLeft(0)}
                >
                  ‹
                </button>
                <div 
                  className="tech-scroll-track" 
                  ref={el => scrollRefs.current[0] = el}
                >
                  <div className="tech-item">
                    <div className="tech-icon">
                      <img src={require("../../Assets/python.png")} alt="Python" />
                    </div>
                    <span className="tech-name">Python</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <img src={require("../../Assets/java.png")} alt="Java" />
                    </div>
                    <span className="tech-name">Java</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <img src={require("../../Assets/kotlin.png")} alt="Kotlin" />
                    </div>
                    <span className="tech-name">Kotlin</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <img src={require("../../Assets/c_plus_plus.png")} alt="c_plus_plus" />
                    </div>
                    <span className="tech-name">C++</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <img src={require("../../Assets/sql.png")} alt="SQL" />
                    </div>
                    <span className="tech-name">SQL</span>
                  </div>
                  
                   <div className="tech-item">
                    <div className="tech-icon">
                      <img src={require("../../Assets/cypher.png")} alt="cypher" />
                    </div>
                    <span className="tech-name">Cypher</span>
                  </div>


            

                </div>
                <button 
                  className="scroll-btn scroll-btn-right"
                  onClick={() => scrollRight(0)}
                >
                  ›
                </button>
              </div>
            </div>

            {/* AI & Machine Learning */}
            <div className="tech-category">
              <h3 className="tech-category-title">AI & Machine Learning</h3>
              <div className="tech-scroll-wrapper">
                <button 
                  className="scroll-btn scroll-btn-left"
                  onClick={() => scrollLeft(1)}
                >
                  ‹
                </button>
                <div 
                  className="tech-scroll-track" 
                  ref={el => scrollRefs.current[1] = el}
                >
                  <div className="tech-item">
                    <div className="tech-icon">
                      <img src={require("../../Assets/pytorch.png")} alt="PyTorch" />
                    </div>
                    <span className="tech-name">PyTorch</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <img src={require("../../Assets/tensorflow.png")} alt="TensorFlow" />
                    </div>
                    <span className="tech-name">TensorFlow</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <img src={require("../../Assets/mat.png")} alt="mat" />
                    </div>
                    <span className="tech-name">Matplotlib</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <img src={require("../../Assets/pandas.png")} alt="Pandas" />
                    </div>
                    <span className="tech-name">Pandas</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <img src={require("../../Assets/numpy.png")} alt="NumPy" />
                    </div>
                    <span className="tech-name">NumPy</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <img src={require("../../Assets/scikit-learn.png")} alt="Scikit-learn" />
                    </div>
                    <span className="tech-name">Scikit-learn</span>
                  </div>

                  <div className="tech-item">
                    <div className="tech-icon">
                      <img src={require("../../Assets/ollama.png")} alt="ollama" />
                    </div>
                    <span className="tech-name">Ollama</span>
                  </div>

                  <div className="tech-item">
                    <div className="tech-icon">
                      <img src={require("../../Assets/pyspark.png")} alt="PySpark" />
                    </div>
                    <span className="tech-name">PySpark</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <img src={require("../../Assets/huggingface.png")} alt="Hugging Face" />
                    </div>
                    <span className="tech-name">Hugging Face</span>
                  </div>

                        <div className="tech-item">
                    <div className="tech-icon">
                      <img src={require("../../Assets/airflow.png")} alt="airflow" />
                    </div>
                    <span className="tech-name">Airflow</span>
                  </div>


                <div className="tech-item">
                    <div className="tech-icon">
                      <img src={require("../../Assets/DuckDB.png")} alt="DuckDB" />
                    </div>
                    <span className="tech-name">DuckDB</span>
                  </div>

                  <div className="tech-item">
                    <div className="tech-icon">
                      <img src={require("../../Assets/LangChain.png")} alt="LangChain" />
                    </div>
                    <span className="tech-name">LangChain</span>
                  </div>


                <div className="tech-item">
                    <div className="tech-icon">
                      <img src={require("../../Assets/unsloth.png")} alt="unsloth" />
                    </div>
                    <span className="tech-name">nsloth</span>
                  </div>

                  <div className="tech-item">
                    <div className="tech-icon">
                      <img src={require("../../Assets/streamlit.png")} alt="streamlit" />
                    </div>
                    <span className="tech-name">Streamlit</span>
                  </div>


                </div>
                <button 
                  className="scroll-btn scroll-btn-right"
                  onClick={() => scrollRight(1)}
                >
                  ›
                </button>
              </div>
            </div>

            {/* Tools & Platforms */}
            <div className="tech-category">
              <h3 className="tech-category-title">Tools & Platforms</h3>
              <div className="tech-scroll-wrapper">
                <button 
                  className="scroll-btn scroll-btn-left"
                  onClick={() => scrollLeft(2)}
                >
                  ‹
                </button>
                <div 
                  className="tech-scroll-track" 
                  ref={el => scrollRefs.current[2] = el}
                >
                  <div className="tech-item">
                    <div className="tech-icon">
                      <img src={require("../../Assets/git.png")} alt="Git" />
                    </div>
                    <span className="tech-name">Git</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <img src={require("../../Assets/docker.png")} alt="Docker" />
                    </div>
                    <span className="tech-name">Docker</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <img src={require("../../Assets/digitalocean.png")} alt="digitalocean" />
                    </div>
                    <span className="tech-name">Digital Ocean</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <img src={require("../../Assets/linux.png")} alt="Linux" />
                    </div>
                    <span className="tech-name">Linux</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <img src={require("../../Assets/Jupyter.png")} alt="Jupyter" />
                    </div>
                    <span className="tech-name">Jupyter</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <img src={require("../../Assets/neo4j.png")} alt="neo4j" />
                    </div>
                    <span className="tech-name">Neo4j</span>
                  </div>

                       
                   <div className="tech-item">
                    <div className="tech-icon">
                      <img src={require("../../Assets/DBeaver.png")} alt="DBeaver" />
                    </div>
                    <span className="tech-name">DBeaver</span>
                  </div>
 

                  <div className="tech-item">
                    <div className="tech-icon">
                      <img src={require("../../Assets/postgresql.png")} alt="postgresql" />
                    </div>
                    <span className="tech-name">postgreSQL</span>
                  </div>


                         
                   <div className="tech-item">
                    <div className="tech-icon">
                      <img src={require("../../Assets/prestodb.png")} alt="prestodb" />
                    </div>
                    <span className="tech-name">PrestoDB</span>
                  </div>
          
                   <div className="tech-item">
                    <div className="tech-icon">
                      <img src={require("../../Assets/lighting_ai.jpg")} alt="lighting_ai" />
                    </div>
                    <span className="tech-name">Lighting AI</span>
                  </div>        

          
                   <div className="tech-item">
                    <div className="tech-icon">
                      <img src={require("../../Assets/Contabo.png")} alt="Contabo" />
                    </div>
                    <span className="tech-name">Contabo</span>
                  </div>
                </div>
                <button 
                  className="scroll-btn scroll-btn-right"
                  onClick={() => scrollRight(2)}
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Container>
  );
}

export default About;