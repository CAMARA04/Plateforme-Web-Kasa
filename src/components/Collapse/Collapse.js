import React, { useState } from "react";
import PropTypes from "prop-types";
import customArrowIcon from "../../assets/icones/arrow_back_ios-24px 2.png";
import "../Collapse/Collapse.scss";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse-item ${isOpen ? "open" : ""}`}>
      <div className="item-header" onClick={toggleCollapse}>
        <span className="item-title">{title}</span>
        <img
          src={customArrowIcon}
          alt="Custom-Arrow"
          className={`arrow-icon ${isOpen ? "open" : ""}`}
        />
      </div>
      {isOpen && <div className="content">{content}</div>}
    </div>
  );
};

Collapse.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Collapse;
