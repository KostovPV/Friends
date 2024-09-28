import React, { useState } from 'react';
import './Slider.css'; // Import CSS for the slider

import kid1 from "../../assets/images/kids1.jpg";
import kid2 from "../../assets/images/kids2.jpg";
import kid3 from "../../assets/images/kids3.jpg";

const images = [kid1, kid2, kid3];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      {/* Left arrow */}
      <div className="arrow left-arrow" onClick={goToPrevSlide}>
        &#10094;
      </div>
      <div className="slider-image" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
     
      </div>

      {/* Right arrow */}
      <div className="arrow right-arrow" onClick={goToNextSlide}>
        &#10095;
      </div>

      {/* Dots */}
      <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
