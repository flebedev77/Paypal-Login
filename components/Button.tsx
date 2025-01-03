"use client";

import React, { useState } from "react";

interface ButtonProps {
  text: string;
  primary: boolean;
  className: string;
  onClick: Function;
}

const Button: React.FC<ButtonProps> = ({
  text = "",
  primary = false,
  className = "",
  onClick = () => {},
}) => {
  const [isDown, setIsDown] = useState(false);

  return (
    <button
      className={`w-full p-3 rounded-full ${className} ${primary ? "primary-button" : "secondary-button"} ${isDown && primary ? "primary-button-down" : ""}`}
      onMouseDown={() => setIsDown(true)}
      onMouseLeave={() => setIsDown(false)}
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
};

export default Button;
