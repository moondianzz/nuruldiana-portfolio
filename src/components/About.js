import './About.css';

const skills = [
  'Power Apps', 'Power Automate', 'Power BI', 'SharePoint',
  'React', 'Firebase', 'Python', 'TensorFlow', 'ESP32',
  'JavaScript', 'SQL', 'Excel'
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-heading" data-num="01">About</h2>

        <p className="about-bio">
          Software Engineering student at Universiti Malaysia Sabah, currently interning as a
          Finance Systems & Solutions Intern at PETRONAS Finance Modernisation, specialising in
          Power Platform development and business process automation.
        </p>

        <div className="about-skills">
          <div className="skills-label">Skills</div>
          <div className="skills-tags">
            {skills.map((skill, i) => (
              <span key={i} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
