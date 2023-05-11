import React, { useState, useEffect } from 'react';
import img1 from "../assets/ha/8.jpeg"
import img2 from "../assets/ha/7.jpeg"
import img3 from "../assets/ha/11.jpeg"
import img4 from "../assets/ha/9.jpeg"
import img5 from "../assets/ha/10.jpeg"

const Services = () => {
  const [images, setImages] = useState([
    img1,
    img2,
    img3,
    img4,
    img5,
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 300);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="container flex items-center gap-8 mx-auto image-slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`image-slide w-[300px]  ${
            index === currentImageIndex ? 'active' : ''
          }`}
        >
          <img className='rounded-2xl' src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Services;