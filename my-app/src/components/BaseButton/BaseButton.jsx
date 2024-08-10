import React from "react";
import "./BaseButton.css";

function BaseButton({ text, color = "white", handleClick }) {
  const buttonColor = `button__${color}`;
  console.log(buttonColor)
  return (
    <button className={"button" + " " + buttonColor} onClick={handleClick}>
      {text}
    </button>
  );
}

export default BaseButton;
