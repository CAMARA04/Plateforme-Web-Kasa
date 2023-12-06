import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Slideshow.scss";
import iconePreview from "../../assets/icones/arrow_back_ios-24px 1.png";
import iconeForward from "../../assets/icones/arrow_forward_ios-24px 1.png";

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

  // Calcul de la numérotation
  const slideNumber = `${currentImageIndex + 1}/${images.length}`;

  return (
    <div className="slideshow-container">
      <img
        src={images[currentImageIndex]}
        alt={`Slideshow ${currentImageIndex}`}
        className="caroussel-pictures"
      />

      <div className="overlay-icones">
        <button className="previous-button" onClick={previousImage}>
          <img src={iconePreview} alt="Preview" className="slideshow-button" />
        </button>
        <div className="slide-number">{slideNumber}</div>
        <button onClick={nextImage}>
          <img className="slideshow-button" src={iconeForward} alt="Next" />
        </button>
      </div>
    </div>
  );
};

Slideshow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slideshow;
