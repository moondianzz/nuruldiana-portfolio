import './Cocurriculum.css';
import p1 from '../assets/cocurriculum/photo_2026-06-07_01-59-07.jpg';
import p2 from '../assets/cocurriculum/photo_2026-06-07_01-59-10.jpg';
import p3 from '../assets/cocurriculum/photo_2026-06-07_01-59-12.jpg';
import p4 from '../assets/cocurriculum/photo_2026-06-07_01-59-15.jpg';
import p5 from '../assets/cocurriculum/photo_2026-06-07_01-59-17.jpg';
import p6 from '../assets/cocurriculum/photo_2026-06-07_01-59-20.jpg';
import p7 from '../assets/cocurriculum/photo_2026-06-07_01-59-23.jpg';
import p8 from '../assets/cocurriculum/photo_2026-06-07_01-59-25.jpg';
import p9 from '../assets/cocurriculum/photo_2026-06-07_01-59-28.jpg';
import p10 from '../assets/cocurriculum/photo_2026-06-07_01-59-30.jpg';
import p11 from '../assets/cocurriculum/photo_2026-06-07_01-59-34.jpg';
import p12 from '../assets/cocurriculum/photo_2026-06-07_01-59-37.jpg';
import p13 from '../assets/cocurriculum/photo_2026-06-07_01-59-40.jpg';
import p14 from '../assets/cocurriculum/photo_2026-06-07_01-59-42.jpg';

const communityServices = [
  {
    role: 'Treasurer',
    programme: 'JIWA 2.0: Borneo Relawan (BORELA) X UPSI',
    date: 'August 2024',
    description: 'Managed programme budgeting, expense tracking, and financial reporting to ensure transparent and efficient fund utilisation.'
  },
  {
    role: 'Director',
    programme: 'Selangkah Ke Menara Gading (SEMEGA) 2024',
    date: 'August 2024',
    description: 'Led overall programme planning, coordination, and execution to achieve programme objectives successfully.'
  },
  {
    role: 'Treasurer & Speaker',
    programme: 'Aram Momusorou (ARASOU)',
    date: 'September 2024',
    description: 'Oversaw financial management and delivered a talk on basic financial planning and budgeting to programme participants.'
  },
  {
    role: 'Secretary & Treasurer',
    programme: 'Jelajah Ilmu Watan (JIWA) 1.0',
    date: 'August 2023',
    description: 'Coordinated documentation and managed finances for education-focused programme activities.'
  }
];

const activities = [
  {
    role: 'President',
    organisation: 'Kelab Rakan Pustaka',
    period: '2024/2025 Session'
  },
  {
    role: 'Head of Secretariat Unit',
    organisation: 'Karnival Kesihatan Universiti Malaysia Sabah 2025',
    period: '2025'
  },
  {
    role: 'Deputy Director',
    organisation: 'Festival Tamu Gadang Kali Ke-26',
    period: '2024'
  },
  {
    role: 'Secretariat',
    organisation: 'Student Representative Council (MPP UMS)',
    period: '2023/2024 Session'
  },
  {
    role: 'Director',
    organisation: 'Technology Festival (TechFest) 2023',
    period: '2023'
  },
  {
    role: 'Timbalan Ketua Unit Urusetia',
    organisation: 'Minggu Suai Mesra Kali Ke-30 (MSM30)',
    period: '2024'
  }
];

const photos = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14];

const Cocurriculum = () => {
  return (
    <section id="cocurriculum" className="cocurriculum">
      <div className="container">
        <h2 className="cocurri-heading">Co-Curriculum</h2>
        <p className="cocurri-subheading">
          Beyond academics — leading, organising, and serving the university community.
        </p>
      </div>

      {/* Horizontally scrollable photo strip */}
      <div className="photo-strip-wrapper">
        <div className="photo-strip">
          {[...photos, ...photos].map((src, i) => (
            <div key={i} className="photo-card">
              <img src={src} alt={`Activity ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        {/* Community Services */}
        <div className="cocurri-block">
          <h3 className="cocurri-block-title">Community Services</h3>
          <div className="cocurri-grid">
            {communityServices.map((item, i) => (
              <div key={i} className="cocurri-card">
                <div className="cocurri-card-top">
                  <span className="cocurri-role">{item.role}</span>
                  <span className="cocurri-date">{item.date}</span>
                </div>
                <div className="cocurri-programme">{item.programme}</div>
                <p className="cocurri-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="cocurri-block">
          <h3 className="cocurri-block-title">Activities & Involvement</h3>
          <div className="activities-list">
            {activities.map((item, i) => (
              <div key={i} className="activity-row">
                <div className="activity-left">
                  <div className="activity-role">{item.role}</div>
                  <div className="activity-org">{item.organisation}</div>
                </div>
                <div className="activity-period">{item.period}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cocurriculum;
