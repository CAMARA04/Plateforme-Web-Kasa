import React from "react";
import PropTypes from "prop-types";
import "./Host.scss";

const Host = ({ name, picture }) => {
  const [firstName, lastName] = name.split(" ");

  return (
    <div className="owner-info">
      <p className="owner-name">
        <p>{firstName}</p>
        <p>{lastName}</p>
      </p>
      <img src={picture} alt={name} className="owner-picture" />
    </div>
  );
};

Host.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default Host;
