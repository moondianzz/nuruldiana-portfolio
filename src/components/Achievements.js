import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      title: 'Winner - Best FYP Project (System/VR/IoT)',
      organization: 'FYP Exhibition, Universiti Malaysia Sabah',
      date: 'January 2026',
      description: 'Selected as Best FYP2 Innovation among competing final-year projects for excellence in system design, innovation, and real-world application',
      featured: true
    },
    {
      title: 'Anugerah Khas Berkumpulan',
      organization: 'Majlis Anugerah Hal Ehwal Pelajar dan Alumni Kali Ke-26',
      subTitle: 'Majlis Perwakilan Pelajar Sesi 2023/2024',
      date: 'November 2025',
      description: 'Awarded for outstanding collective leadership, contribution, and successful completion of required evaluation criteria within the Student Representative Council',
      featured: false
    },
    {
      title: 'Finalist and Silver Medal',
      organization: 'Carnival SULAM@UPSI',
      subTitle: 'Universiti Pendidikan Sultan Idris',
      date: 'October 2025',
      description: 'Achieved finalist status and silver medal for a community-based project evaluated on impact, innovation, and implementation',
      featured: false
    },
    {
      title: 'First Place',
      organization: 'Carnival SULAM UMS',
      subTitle: 'Minggu Akademik, Universiti Malaysia Sabah',
      date: 'October 2025',
      description: 'Secured first place for excellence in planning, execution, and community engagement in a service-learning project',
      featured: false
    },
    {
      title: 'Anugerah Penganjuran Program Mahasiswa',
      organization: 'Majlis Anugerah Hal Ehwal Pelajar dan Alumni Kali Ke-25',
      subTitle: 'Majlis Perwakilan Pelajar Sesi 2022/2023',
      date: 'June 2024',
      description: 'Recognised for effective programme management, leadership, and successful organisation of student-led initiatives',
      featured: false
    }
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <div className="section-number">02</div>
        <h2 className="section-title">Achievements & Awards</h2>

        <div className="achievements-list">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-item">
              <div className="achievement-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="achievement-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                {achievement.featured && (
                  <div className="achievement-status">Featured Achievement</div>
                )}
                <div className="achievement-org">{achievement.organization}</div>
                {achievement.subTitle && (
                  <div className="achievement-subtitle">{achievement.subTitle}</div>
                )}
                <div className="achievement-date">{achievement.date}</div>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
