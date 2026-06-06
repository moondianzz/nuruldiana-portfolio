import { useEffect } from 'react';
import './Hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text" data-aos="fade-right">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Nuruldiana Zaidi</span>
          </h1>
          <h2 className="hero-subtitle">Software Engineering Student | Finance Systems & Solutions Intern at PETRONAS ICT</h2>
          <p className="hero-description">
            Passionate about leveraging technology to solve real-world problems through IoT, AI, and web development.
            Best FYP Project winner in System/VR/IoT category. Specializing in Power Platform development
            and business process automation.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-secondary">View My Work</a>
          </div>
          <div className="hero-social">
            <a href="https://linkedin.com/in/nuruldianazaidi" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="mailto:nuruldianabintizaidi@gmail.com" className="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="hero-image" data-aos="fade-left">
          <div className="profile-image-container">
            <img
              src={profileImage}
              alt="Nuruldiana Zaidi - Software Engineering Student"
              className="profile-image"
            />
            <div className="hero-tagline">
              <h3>Building innovative solutions</h3>
              <p>with Power Platform, IoT & AI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
