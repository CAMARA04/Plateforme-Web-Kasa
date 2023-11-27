import React from "react";
import "./Card.scss";

const Card = ({ title, coverPhoto }) => {
  return (
    <div className="card">
      <img src={coverPhoto} alt="{title}" className="card-image" />
      <div className="background-title">
        <div className="card-title">{title}</div>
      </div>
    </div>
  );
};

export default Card;
