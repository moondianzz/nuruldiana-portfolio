import { useState, useEffect } from 'react';
import './Loader.css';

const Loader = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadComplete();
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <div className={`loader ${progress === 100 ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <div className="loader-initials">ND</div>
        <div className="loader-percentage">{progress}%</div>
        <div className="loader-bar">
          <div className="loader-progress" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="loader-text">LOADING EXPERIENCE</div>
      </div>
    </div>
  );
};

export default Loader;
