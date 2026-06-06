import { useState } from 'react';
import './Experience.css';

const experiences = [
  {
    role: 'Finance Systems and Solutions Intern',
    company: 'PETRONAS Finance Modernisation',
    department: 'Finance Shared Services (FSS) - xP&A Team',
    location: 'Kuala Lumpur',
    period: 'March 2026 – August 2026',
    current: true,
    responsibilities: [
      'Developed and enhanced AGORA system using Power Apps and Power Automate, supporting budget transfer workflows across MLNG, PFLNG, and PLC',
      'Implemented Row-Level Security (RLS) in Power BI dashboards for controlled data access across departments',
      'Designed and optimized Power Automate workflows for approval processes, email notifications, and system integration',
      'Managed SharePoint data structures, master data configuration, and data validation for enterprise budget systems',
      'Created user guides and technical documentation for AGORA system deployment across PETRONAS operating units',
      'Collaborated with stakeholders to gather requirements, conduct UAT, and implement enhancements',
      'Utilized Excel advanced functions (VLOOKUP, XLOOKUP, Pivot Tables) for data processing and reporting',
      'Gained exposure to RPA tools (Blue Prism) and automation initiatives in financial operations'
    ]
  },
  {
    role: 'Freelance Teacher',
    company: 'Smart Native Maker',
    location: 'Kota Kinabalu, Sabah (Hybrid)',
    period: 'August 2025 – March 2026',
    current: false,
    responsibilities: [
      'Delivered hands-on training on MIT App Inventor covering mobile app UI design and basic application logic',
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

const Experience = () => {
  const [openExp, setOpenExp] = useState(null);
  const [openCert, setOpenCert] = useState(null);

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-heading" data-num="04">Experience & Certifications</h2>

        <div className="exp-block">
          <div className="exp-block-label">Work Experience</div>
          {experiences.map((exp, i) => (
            <div key={i} className={`acc-item ${openExp === i ? 'is-open' : ''}`}>
              <button className="acc-header" onClick={() => setOpenExp(openExp === i ? null : i)}>
                <div className="acc-left">
                  <span className="acc-title">{exp.role}</span>
                  <span className="acc-sub">{exp.company} · {exp.location}</span>
                </div>
                <div className="acc-right">
                  <span className="acc-period">{exp.period}</span>
                  {exp.current && <span className="acc-badge">Current</span>}
                  <span className="acc-toggle">+</span>
                </div>
              </button>
              {openExp === i && (
                <div className="acc-body">
                  {exp.department && <div className="acc-dept">{exp.department}</div>}
                  <ul className="acc-list">
                    {exp.responsibilities.map((r, j) => (
                      <li key={j}>{r}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="exp-block">
          <div className="exp-block-label">Certifications</div>
          {certificates.map((cert, i) => (
            <div key={i} className={`acc-item ${openCert === i ? 'is-open' : ''}`}>
              <button className="acc-header" onClick={() => setOpenCert(openCert === i ? null : i)}>
                <div className="acc-left">
                  <span className="acc-title">{cert.name}</span>
                  <span className="acc-sub">{cert.issuer}</span>
                </div>
                <div className="acc-right">
                  <span className="acc-period">{cert.date}</span>
                  <span className="acc-toggle">+</span>
                </div>
              </button>
              {openCert === i && (
                <div className="acc-body">
                  {cert.credentialId && <div className="acc-dept">Credential ID: {cert.credentialId}</div>}
                  <p className="acc-desc">{cert.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
