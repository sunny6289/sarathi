import React, { useState } from 'react';
import './slider.css';
import { images } from '../../rawData/images';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <button className="slider-button prev" onClick={prevSlide}>
      <FaAngleLeft />
      </button>
      <div className="slider-wrapper">
        <div
          className="slider-images"
          style={{ transform: `translateX(${-currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="slider-image">
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
      </div>
      <button className="slider-button next" onClick={nextSlide}>
      <FaAngleRight />
      </button>
    </div>
  );
};

export default ImageSlider;
