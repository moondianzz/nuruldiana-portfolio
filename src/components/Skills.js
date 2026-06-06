import { useEffect } from 'react';
import './Skills.css';
import AOS from 'aos';

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }, []);

  const skillsData = {
    advanced: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 95 },
      { name: 'Power Apps', level: 85 },
      { name: 'Power Automate', level: 85 },
      { name: 'IoT Sensor Integration', level: 90 },
      { name: 'Data Visualization', level: 85 }
    ],
    intermediate: [
      { name: 'Python', level: 80 },
      { name: 'Power BI', level: 80 },
      { name: 'SharePoint', level: 75 },
      { name: 'PHP', level: 80 },
      { name: 'JavaScript', level: 75 },
      { name: 'Laravel', level: 75 },
      { name: 'MySQL', level: 80 },
      { name: 'TensorFlow', level: 70 },
      { name: 'Keras', level: 70 },
      { name: 'UI/UX Design', level: 75 }
    ],
    basic: [
      { name: 'Unity', level: 65 },
      { name: 'AR/VR Development', level: 60 },
      { name: 'Figma', level: 65 },
      { name: 'Android Studio', level: 60 },
      { name: 'Linux', level: 60 },
      { name: 'Blue Prism (RPA)', level: 55 }
    ]
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-heading" data-num="02">Technical Skills</h2>

        <div className="skills-category" data-aos="fade-up" data-aos-delay="100">
          <h3 className="category-title">
            <span className="badge advanced">Advanced</span>
          </h3>
          <div className="skills-grid">
            {skillsData.advanced.map((skill, index) => (
              <div key={index} className="skill-card" data-aos="fade-up" data-aos-delay={150 + index * 50}>
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress advanced-bar"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category" data-aos="fade-up" data-aos-delay="200">
          <h3 className="category-title">
            <span className="badge intermediate">Intermediate</span>
          </h3>
          <div className="skills-grid">
            {skillsData.intermediate.map((skill, index) => (
              <div key={index} className="skill-card" data-aos="fade-up" data-aos-delay={100 + index * 30}>
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress intermediate-bar"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category" data-aos="fade-up" data-aos-delay="300">
          <h3 className="category-title">
            <span className="badge basic">Basic</span>
          </h3>
          <div className="skills-grid">
            {skillsData.basic.map((skill, index) => (
              <div key={index} className="skill-card" data-aos="fade-up" data-aos-delay={100 + index * 40}>
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress basic-bar"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
