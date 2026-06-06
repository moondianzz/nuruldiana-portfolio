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
        <h2 className="about-heading">About</h2>

        <div className="about-body">
          <div className="about-facts">
            <div className="fact-row">
              <span className="fact-label">University</span>
              <span className="fact-value">Universiti Malaysia Sabah</span>
            </div>
            <div className="fact-row">
              <span className="fact-label">Degree</span>
              <span className="fact-value">B.Cs. (Hons.) Software Engineering</span>
            </div>
            <div className="fact-row">
              <span className="fact-label">Internship</span>
              <span className="fact-value">Finance Systems & Solutions Intern — PETRONAS ICT</span>
            </div>
            <div className="fact-row">
              <span className="fact-label">Specialisation</span>
              <span className="fact-value">Power Platform · Business Process Automation</span>
            </div>
            <div className="fact-row">
              <span className="fact-label">CGPA</span>
              <span className="fact-value">3.52</span>
            </div>
          </div>

          <div className="about-skills">
            <div className="skills-label">Skills</div>
            <div className="skills-tags">
              {skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
