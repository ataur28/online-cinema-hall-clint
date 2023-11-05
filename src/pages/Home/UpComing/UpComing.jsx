import { useState } from 'react';
import upcoming1 from "../../../assets/images/upcoming/upcoming-movie-1.jpg";
import upcoming2 from "../../../assets/images/upcoming/upcoming-movie-2.jpg";
import upcoming3 from "../../../assets/images/upcoming/upcoming-movie-3.jpg";
import upcoming4 from "../../../assets/images/upcoming/upcoming-movie-4.jpg";

import './UpComing.css';

const UpComing = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <h2 className="text-4xl font-bold pt-8 text-center text-gray-600">Upcoming</h2>

      <div className="lg:grid lg:grid-cols-4 gap-2 rounded-lg">
        <img
          className={`m-5 w-60 h-60 border-4 border-pink-300 rounded-lg running-animation ${isHovered ? 'paused' : ''}`}
          src={upcoming1}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <img
          className={`m-5 w-60 h-60 border-4 border-pink-300 rounded-lg running-animation ${isHovered ? 'paused' : ''}`}
          src={upcoming2}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <img
          className={`m-5 w-60 h-60 border-4 border-pink-300 rounded-lg running-animation ${isHovered ? 'paused' : ''}`}
          src={upcoming3}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <img
          className={`m-5 w-60 h-60 border-4 border-pink-300 rounded-lg running-animation ${isHovered ? 'paused' : ''}`}
          src={upcoming4}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
};

export default UpComing;