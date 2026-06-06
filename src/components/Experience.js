import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Finance Systems and Solutions Intern',
      company: 'PETRONAS',
      department: 'Finance Shared Services (FSS) - Xp&A Team',
      location: 'Kuala Lumpur, Malaysia',
      period: 'March 2026 - August 2026',
      current: true,
      responsibilities: [
        'Developed and enhanced AGORA (Automated Gateway for Optimised Reallocation and Approval) system using Power Apps and Power Automate, supporting budget transfer workflows across multiple operating units including MLNG, PFLNG, and PLC',
        'Implemented Row-Level Security (RLS) in Power BI dashboards for controlled data access across departments, ensuring secure financial data visibility',
        'Designed and optimized Power Automate workflows for approval processes, email notifications, and system integration',
        'Managed SharePoint data structures, master data configuration, and data validation processes for enterprise budget systems',
        'Created comprehensive user guides and technical documentation for AGORA system deployment across PETRONAS operating units',
        'Collaborated with stakeholders to gather requirements, conduct system testing (UAT), and implement enhancements based on business feedback',
        'Utilized Excel advanced functions (VLOOKUP, XLOOKUP, Pivot Tables) for data processing, validation, and reporting',
        'Gained exposure to RPA tools (Blue Prism) and automation initiatives in financial operations',
        'Participated in cross-functional meetings with business units including Gentari, MLNG, PFLNG, and PCG teams'
      ]
    },
    {
      role: 'Freelance Teacher',
      company: 'Smart Native Maker',
      location: 'Kota Kinabalu, Sabah (Hybrid)',
      period: 'August 2025 - March 2026',
      current: false,
      responsibilities: [
        'Delivered hands-on training on MIT App Inventor, covering mobile app UI design and basic application logic',
        'Conducted workshops on Generative AI and prompt engineering using Google Gemini for diverse learners',
        'Supported training delivery through lesson preparation, participant guidance, and post-session assistance'
      ]
    }
  ];

  const certificates = [
    {
      name: 'CyberEye Cybersecurity Fundamentals',
      issuer: 'CyberEye',
      date: 'March 2026',
      credentialId: 'USC00016585',
      description: 'Fundamental knowledge in cybersecurity principles, threat detection, and security best practices'
    },
    {
      name: 'HCIA-AI V3.5',
      issuer: 'Huawei ICT Academy',
      date: 'July 2024',
      description: 'Fundamental AI concepts including machine learning, deep learning, and AI workflows'
    },
    {
      name: 'CCNAv7: Introduction to Networks',
      issuer: 'Cisco Networking Academy',
      date: 'September 2023',
      description: 'Foundational knowledge of networking concepts, IP addressing, and network configuration'
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-number">04</div>
        <h2 className="section-title">Experience & Certifications</h2>

        <div className="experience-content">
          <div className="work-section">
            <h3 className="subsection-title">Work Experience</h3>
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="exp-header">
                  <div>
                    <h4 className="exp-role">{exp.role}</h4>
                    <div className="exp-company">
                      {exp.company} • {exp.location}
                    </div>
                    {exp.department && (
                      <div className="exp-department">{exp.department}</div>
                    )}
                  </div>
                  <div className="exp-period">
                    {exp.period}
                    {exp.current && <span className="current-badge">Current</span>}
                  </div>
                </div>
                <ul className="exp-responsibilities">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="certificates-section">
            <h3 className="subsection-title">Professional Certifications</h3>
            <div className="certificates-grid">
              {certificates.map((cert, index) => (
                <div key={index} className="certificate-card">
                  <h4 className="cert-name">{cert.name}</h4>
                  <div className="cert-issuer">{cert.issuer}</div>
                  <div className="cert-date">{cert.date}</div>
                  {cert.credentialId && (
                    <div className="cert-credential">Credential ID: {cert.credentialId}</div>
                  )}
                  <p className="cert-description">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
