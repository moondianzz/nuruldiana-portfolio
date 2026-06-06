import './Hero.css';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-photo-wrapper">
        <img src={profileImage} alt="Nuruldiana Zaidi" />
      </div>

      <div className="hero-overlay-text">
        <p>Software Engineering Student<br />Finance Systems & Solutions Intern<br />PETRONAS ICT</p>
      </div>

      <div className="hero-bottom">
        <div className="hero-big-name">Nuruldiana<br />Zaidi</div>
        <div className="hero-bottom-row">
          <span className="hero-role">Power Platform · IoT · Web Dev</span>
          <span className="hero-scroll-hint">Scroll ↓</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
