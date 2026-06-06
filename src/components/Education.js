import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Science with (Hons.) Software Engineering',
      institution: 'Universiti Malaysia Sabah (UMS)',
      location: 'Kota Kinabalu, Sabah',
      period: 'October 2022 - Present',
      cgpa: '3.52',
      current: true,
      highlights: [
        'Strong foundation in web development, databases, and software development',
        'Winner of Best FYP Project (System/VR/IoT) - January 2026',
        'Active in student leadership and community service'
      ]
    },
    {
      degree: 'Certificate in Computer Science',
      institution: 'Negeri Sembilan Matriculation College (KMNS)',
      location: 'Negeri Sembilan',
      period: 'August 2020 - May 2022',
      cgpa: '3.54',
      current: false,
      highlights: [
        'Achieved CGPA of 3.54',
        'Built strong foundation in computer science fundamentals'
      ]
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-number">05</div>
        <h2 className="section-title">Education</h2>

        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className={`education-item ${edu.current ? 'current' : ''}`}>
              <div className="timeline-marker"></div>
              <div className="education-card">
                <div className="edu-header">
                  <div className="edu-main">
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <div className="edu-institution">
                      {edu.institution}
                      {edu.current && <span className="current-badge">Current</span>}
                    </div>
                    <div className="edu-location">{edu.location}</div>
                  </div>
                  <div className="edu-meta">
                    <div className="edu-period">{edu.period}</div>
                    <div className="edu-cgpa">
                      <span className="cgpa-label">CGPA</span>
                      <span className="cgpa-value">{edu.cgpa}</span>
                    </div>
                  </div>
                </div>
                <ul className="edu-highlights">
                  {edu.highlights.map((highlight, hIndex) => (
                    <li key={hIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
