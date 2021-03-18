// Generated with util/create-component.js
import React from "react";

import { ButtonProps } from "./Button.types";

import "./Button.scss";

const colors = {
  default: "default",
  primary: "primary",
  secondary: "secondary",
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  color,
  disabled,
}) => {
  const className = colors[color] ? `button ${colors[color]}` : "button";
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
