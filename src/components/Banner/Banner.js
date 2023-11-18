import React from "react";

const Banner = (props) => {
  return (
    <div className="banner">
      <img src={props.imageUrl} alt={props.imageAlt} />
      <div className="banner-text">
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};

export default Banner;
