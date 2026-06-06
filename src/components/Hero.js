import './Hero.css';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Nuruldiana Zaidi</span>
          </h1>
          <h2 className="hero-subtitle">
            Software Engineering Student · Finance Systems & Solutions Intern at PETRONAS Finance Modernisation
          </h2>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-secondary">View My Work</a>
          </div>
        </div>

        <div className="hero-image">
          <div className="bubble-wrapper">
            <img src={profileImage} alt="Nuruldiana Zaidi" className="bubble-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
