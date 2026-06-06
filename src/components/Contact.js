import React from 'react';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      label: 'Email',
      value: 'nuruldianabintizaidi@gmail.com',
      link: 'mailto:nuruldianabintizaidi@gmail.com'
    },
    {
      label: 'Phone',
      value: '013-8930466',
      link: 'tel:+60138930466'
    },
    {
      label: 'Location',
      value: 'Miri, Sarawak',
      link: null
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/nuruldianazaidi',
      link: 'https://linkedin.com/in/nuruldianazaidi'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-number">06</div>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Open to collaboration on innovative projects and consulting opportunities.
          Let's build something amazing together!
        </p>

        <div className="contact-content">
          <div className="contact-cards">
            {contactInfo.map((contact, index) => (
              <div key={index} className="contact-card">
                <div className="contact-details">
                  <div className="contact-label">{contact.label}</div>
                  {contact.link ? (
                    <a href={contact.link} className="contact-value" target="_blank" rel="noopener noreferrer">
                      {contact.value}
                    </a>
                  ) : (
                    <div className="contact-value">{contact.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="contact-cta">
            <h3 className="cta-title">Let's Connect!</h3>
            <p className="cta-text">
              I'm passionate about leveraging technology to solve real-world problems.
              Whether it's discussing opportunities, collaborations, or just tech in general,
              I'd love to hear from you!
            </p>
            <div className="cta-buttons">
              <a href="mailto:nuruldianabintizaidi@gmail.com" className="btn btn-primary">
                Send Email
              </a>
              <a href="https://linkedin.com/in/nuruldianazaidi" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2026 Nuruldiana Binti Zaidi. Built with React.</p>
          <div className="footer-links">
            <a href="mailto:nuruldianabintizaidi@gmail.com">Email</a>
            <a href="https://linkedin.com/in/nuruldianazaidi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
