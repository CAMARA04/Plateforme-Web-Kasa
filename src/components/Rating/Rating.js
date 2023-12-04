import React from "react";
import PropTypes from "prop-types";
import "./Rating.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rating = ({ rating }) => {
  const MAX_STARS = 5;

  const stars = Array.from({ length: MAX_STARS }, (_, index) => (
    <FontAwesomeIcon
      key={index}
      icon={faStar}
      className={index < rating ? "star filled" : "star"}
    />
  ));
  return <div className="rating">{stars}</div>;
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
