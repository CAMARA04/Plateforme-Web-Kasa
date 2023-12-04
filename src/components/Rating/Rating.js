import React from "react";
import PropTypes from "prop-types";
import "./Rating.scss";

const Rating = ({ rating }) => {
  const MAX_STARS = 5;

  const stars = Array.from({ length: MAX_STARS }, (_, index) => (
    <span key={index} className={index < rating ? "star filled" : "star"}>
      &#9733;
    </span>
  ));
  return <div className="rating">{stars}</div>;
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
