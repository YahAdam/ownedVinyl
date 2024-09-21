import React from "react";
import "./BaseButton.css";
import BaseIcon from "../BaseIcon/BaseIcon";

const BaseButton = ({
  text,
  color = "white",
  size = "medium",
  icon,
  handleClick
}) => {
  const buttonColor = `button__${color}`;
  const buttonSize = `button__${size}`;
  return (
    <button
      className={`button ${buttonColor} ${buttonSize}`}
      onClick={handleClick}
    >
      {!!icon ? <BaseIcon iconName={icon.name} props={icon.props} /> : ""}
      {text}
    </button>
  );
};

export default BaseButton;
