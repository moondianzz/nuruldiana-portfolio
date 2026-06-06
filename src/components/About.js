import { useEffect } from 'react';
import './About.css';
import AOS from 'aos';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-number" data-aos="fade-up">00</div>
        <h2 className="section-title" data-aos="fade-up">About Me</h2>
        <div className="about-content">
          <div className="about-text" data-aos="fade-up" data-aos-delay="100">
            <p className="about-intro">
              Software Engineering student at Universiti Malaysia Sabah, currently completing my internship
              as a Finance Systems and Solutions Intern at PETRONAS ICT, specializing in Power Platform development
              and business process automation.
            </p>
            <p>
              Passionate about leveraging technology to solve real-world problems through IoT, AI, and web development.
              My final year project on an IoT-Based Chili Farm Management System with AI-Powered Disease Detection
              won the Best FYP Project award in the System/VR/IoT category, demonstrating my ability to integrate
              cutting-edge technologies including ESP32, TensorFlow, React, and Firebase to create comprehensive solutions.
            </p>
            <p>
              Beyond technical work, I'm actively involved in community service and student leadership,
              having served as President of Kelab Rakan Pustaka, Secretariat for the Student
              Representative Council, and Director for various university programs. I believe in
              continuous learning and leveraging technology to create meaningful impact.
            </p>
            <div className="about-stats" data-aos="fade-up" data-aos-delay="200">
              <div className="stat">
                <div className="stat-number">3.52</div>
                <div className="stat-label">CGPA</div>
              </div>
              <div className="stat">
                <div className="stat-number">6+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat">
                <div className="stat-number">5+</div>
                <div className="stat-label">Achievements</div>
              </div>
              <div className="stat">
                <div className="stat-number">3</div>
                <div className="stat-label">Languages</div>
              </div>
            </div>
          </div>
          <div className="about-highlights">
            <div className="highlight-card" data-aos="fade-up" data-aos-delay="150">
              <h3>Education</h3>
              <p>Bachelor of Computer Science (Hons.) in Software Engineering</p>
              <span className="highlight-detail">Universiti Malaysia Sabah</span>
            </div>
            <div className="highlight-card" data-aos="fade-up" data-aos-delay="200">
              <h3>Current Role</h3>
              <p>Finance Systems & Solutions Intern</p>
              <span className="highlight-detail">PETRONAS ICT - Power Platform Development</span>
            </div>
            <div className="highlight-card" data-aos="fade-up" data-aos-delay="250">
              <h3>Recent Win</h3>
              <p>Best FYP Project Winner</p>
              <span className="highlight-detail">System/VR/IoT Category - Jan 2026</span>
            </div>
            <div className="highlight-card" data-aos="fade-up" data-aos-delay="300">
              <h3>Languages</h3>
              <p>Fluent in Malay & English</p>
              <span className="highlight-detail">Basic Mandarin</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
