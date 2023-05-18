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
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="container flex-col items-center gap-8 mx-auto mt-64 sm:mt-64 md:mt-64 md:grid-cols-4 md:gap-10 sm:flex-col md:grid image-slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`image-slide w-[200px]  md:w-[160px] lg:w-[200px] xl:w-[280px]   ${
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
