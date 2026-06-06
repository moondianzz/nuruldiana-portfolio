import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'IoT-Based Chili Farm Management System with AI-Powered Disease Detection',
      type: 'Final Year Project',
      description: 'Developed a web-based chili farm management system for real-time monitoring using IoT sensors and data visualization with AI-powered disease detection capabilities.',
      technologies: ['IoT', 'Web Development', 'AI', 'Python', 'TensorFlow', 'Keras', 'Sensors'],
      award: 'Best FYP Project Winner (System/VR/IoT)',
      featured: true
    },
    {
      title: 'FPSK Room Booking System',
      type: 'Web Application',
      description: 'Developed a web-based room booking system to manage academic facility reservations with user authentication and real-time availability tracking.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      featured: false
    },
    {
      title: 'Employee Leave Management System',
      type: 'Mobile Application',
      description: 'Developed a mobile application to manage employee leave applications and approval workflows with role-based access control.',
      technologies: ['Unity', 'SQLite', 'Kotlin', 'Android Studio'],
      featured: false
    },
    {
      title: 'The Strangers Encounter Part 3 AR Colouring Book',
      type: 'AR Application',
      description: 'Developed an AR colouring book application with interactive storytelling elements, bringing characters to life through augmented reality.',
      technologies: ['AR/VR', 'Unity', 'Interaction Design'],
      featured: false
    },
    {
      title: 'Kokol Mamahill: Campsite Management',
      type: 'Web Application',
      description: 'Developed a web-based campsite booking and reservation management system for Kokol Mamahill with payment integration.',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
      featured: false
    },
    {
      title: 'Smart Fire Alarm System',
      type: 'IoT Project',
      description: 'Developed an IoT-based fire alarm system for early fire detection using temperature and smoke sensors with real-time notifications.',
      technologies: ['IoT', 'Sensors', 'Microcontroller', 'Real-Time Monitoring'],
      featured: false
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-number">01</div>
        <h2 className="section-title">Selected Work</h2>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                {project.award && (
                  <div className="project-status">{project.award}</div>
                )}
                <div className="project-meta">
                  <span className="project-type">{project.type}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
