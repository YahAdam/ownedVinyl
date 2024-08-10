import React from "react";

function Button({ text, color = "white", handleClick }) {
  const colorConverter = {
    white: "whitesmoke",
    blue: "blue",
    green: "green",
  };
  const buttonColor = { backgroundColor: colorConverter[color] };
  // figure out how to add hover style here. maybe just inline? 
  const buttonStyle = {
    ...buttonColor,
    borderRadius: "16px",
    padding: "8px",
    border: "0",
  };
  return (
    <button style={buttonStyle} onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;
