import './Marquee.css';

const items = [
  'Power Platform', 'React', 'IoT', 'Firebase', 'TensorFlow',
  'Business Automation', 'ESP32', 'AI/ML', 'Web Development', 'Python',
];

const Marquee = () => {
  const repeated = [...items, ...items];

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span key={i} className="marquee-item">
            {item} <span className="marquee-dot">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
