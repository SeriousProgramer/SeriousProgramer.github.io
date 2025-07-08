import React, { useState } from 'react';
import './App.css';
import ProjectCard from './components/ProjectCard';

function App() {
  const [showProjects, setShowProjects] = useState(false);

  const toggleProjects = () => {
    setShowProjects(!showProjects);
  };

  const projects = [
    {
      name: "Portfolio Website",
      date: "May 2025 - Present",
      skills: "React, HTML, CSS, JavaScript",
      description: "A website built to showcase my professional work and technical skills."
    },
    {
      name: "BunqBibble: Travel Safety AI Agent",
      date: "May 2025",
      skills: "LangChain, llama-3_3-nemotron-super-49b, Flask, Expo, AI, RSS Integration, API Integration",
      description: "An AI agent that helps travelers stay safe in new cities by analyzing news feeds, HoodMaps data, and banking patterns. I collaborated with a team at the bunq AI Agent Hackathon to build this solution in 24 hours, focusing on the LangChain implementation and API integrations to provide reliable safety assessments for travelers worldwide."
    },
    {
      name: "EduPilot DevOps",
      date: "March 2025 - Present",
      skills: "Docker, GitLab CI/CD, Linux, High-Performance Computing",
      description: "EduPilot is a large language model focused on education deployed on TU/e's High-Performance Cluster. I configured the Docker environment for the model and backend, set up the CI/CD pipeline using GitLab, and managed the deployment on the university's computing infrastructure."
    },
    {
      name: "PARA: JetBrains Plugin",
      date: "February 2025 - April 2025",
      skills: "Kotlin, IntelliJ Plugin SDK, Maven, Gradle, AI Agents, Git",
      description: "An IntelliJ IDEA plugin that automatically installs Java dependencies by analyzing code. I was involved in the development of the dependency identification system, helped created pipelines for Gradle integration, and via prompt engineering and strategic API usage implemented AI assistance to identify dependencies."
    },
    {
      name: "Transport and Logistics Game",
      date: "August 2024 - Present",
      skills: "PHP, Laravel, Blade, Bootstrap, HTML, SQL, Nginx, Plesk, Git",
      description: "A web-based simulation game for TU Eindhoven students to learn transport and logistics concepts. I developed the full stack implementation including user authentication, real-time communication features, PDF generation, and deployed the solution on Nginx via Plesk."
    },
    {
      name: "Iris: BIM Model Augmentation App",
      date: "November 2024",
      skills: "React Native, Expo, Python, Google Document AI, Git",
      description: "Built a cross-platform mobile app at Junction Hackathon 2024 that simplifies augmenting BIM models by taking photos of device labels and automatically extracting data using Google Document AI."
    },
    {
      name: "SimplyCon: Conference and Events App",
      date: "February 2024 - April 2024",
      skills: "Kotlin, JetPack Compose, Maps API, Git, Firebase",
      description: "SimplyCon is an Android app for organizing and attending conferences. Users could create events, generate QR code tickets, and sell products. Built with Kotlin and Firebase."
    },
    {
      name: "CreditClassroom: Financial Visualization Tool",
      date: "November 2023 - January 2024",
      skills: "Python, Dash, Plotly, Data Science",
      description: "CreditClassroom is a visualization tool to help students better understand personal finance. Created complex multi-variate visualizations using Python, Dash, and Plotly."
    },
    {
      name: "Pills2Go: Pill Dispenser Bracelet",
      date: "September 2023 - November 2023",
      skills: "Arduino C, MIT App Inventor, Bluetooth LE, Electronics",
      description: "Pills2Go is a pill dispensing bracelet built using an ESP32 microcontroller with Bluetooth connectivity to a smartphone app built using MIT App Inventor."
    },
    {
      name: "V5 Haptic Glove",
      date: "September 2023 - June 2024",
      skills: "Arduino C, KiCad, Software Architecture, Rust, GitHub Actions, CI/CD, Jira",
      description: "Developed the V5 haptic glove with a multidisciplinary team. The V5 Haptic glove allows for improved communication via haptics for specially abled people. I worked on the software architecture, CI/CD pipeline, and Rust firmware development."
    },
    {
      name: "AI for Endless Runner Game",
      date: "July 2023 - August 2023",
      skills: "Python, PyGame, NEAT Algorithm",
      description: "Trained an AI using the NEAT algorithm to play a 2D endless runner game based on Google Chrome's dinosaur game. The AI was trained over 1000 generations and can potentially play the game indefinitely."
    },
    {
      name: "Color-Sorting Robot",
      date: "April 2023 - June 2023",
      skills: "Python, MIT App Inventor, Robotics",
      description: "Built a robot that sorts plastic disks based on color, controlled via a custom mobile app designed using MIT App Inventor."
    },
    {
      name: "NOx and Wind Speed Correlation Study",
      date: "February 2023 - April 2023",
      skills: "Python, NumPy, Pandas, Data Analysis",
      description: "Conducted a study investigating correlation between NOx levels and wind speed using data from weather station NL10318. Created various plots and graphs to analyze potential relationships."
    },
    {
      name: "Fractal generator",
      date: "September 2022 - November 2022",
      skills: "Java, Swing, Threading",
      description: "Fractal generator built in Java that could create interactive visualisations of the Mandelbrot set, the Phoenix set and the Pythagoras tree. Each visualisation was built from scratch using just basic Swing elements."
    },
    {
      name: "Java Banking Application",
      date: "June 2021 - December 2021",
      skills: "Java, Swing, File I/O, GUI Development",
      description: "Designed and built a banking application with a GUI interface using Java Swing. Implemented persistent data storage to maintain bank information across sessions."
    }
  ];

  return (
    <div className="App">
      <header>
        <h1>Rohit Binu</h1>
        <p className="title">Full Stack Developer</p>
        <p className="location">Veldhoven, Netherlands</p>
      </header>

      <section id="about">
        <p>
          Hi—I'm <strong>Rohit Binu</strong>, a final year computer-science student and junior software
          engineer based in Noord Brabant. I'm passionate about creating software solutions to real world problems.
        </p>
        
        <ul className="contact-links">
          <li>
            <a 
              href="/Rohit_Binu_Resume.pdf" 
              download="Rohit_Binu_Resume.pdf"
              className="contact-link"
            >
              📄 CV
            </a>
          </li>
          <li>
            <a 
              href="tel:+31645138773"
              className="contact-link"
            >
              📞 +31 6 45 13 87 73
            </a>
          </li>
          <li>
            <a 
              href="mailto:mail.rohit.binu@gmail.com"
              className="contact-link"
            >
              ✉️ mail.rohit.binu@gmail.com
            </a>
          </li>
          <li>
            <a 
              href="https://seriousprogramer.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              🌐 seriousprogramer.github.io (YOU ARE HERE)
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/SeriousProgramer"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              💻 GitHub
            </a>
          </li>
          <li>
            <a 
              href="https://linkedin.com/in/rohit-binu"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              💼 LinkedIn
            </a>
          </li>
        </ul>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <button 
          id="toggleProjects" 
          className="toggle-btn"
          onClick={toggleProjects}
        >
          {showProjects ? 'Hide Projects' : 'Show My Projects'}
        </button>
        
        {showProjects && (
          <div id="projectsContent">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                name={project.name}
                date={project.date}
                skills={project.skills}
                description={project.description}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
