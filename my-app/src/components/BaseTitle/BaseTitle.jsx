import React from "react";
import PropTypes from "prop-types";
import "./BaseTitle.css";

const BaseTitle = ({ title, size = "medium" }) => {
  const sizeValues = ["small", "medium", "large", "x-large"];
  const isValidSize = sizeValues.some(val => val === size);
  if (!isValidSize) console.error(`Invalid size prop value of ${size}`);
  const sizeClass = `title--${size}`;
  return <div className={"title" + " " + sizeClass}> {title} </div>;
};

BaseTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BaseTitle;
