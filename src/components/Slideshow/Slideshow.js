import React, { useState } from "react";
import PropTypes from "prop-types";

const Slideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slideshow">
      <button onClick={previousImage}>Previous</button>
      <img
        src={images[currentImageIndex]}
        alt={`Slideshow ${currentImageIndex}`}
      />
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

Slideshow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slideshow;
