// Generated with util/create-component.js
import React from "react";
import Button from "@material-ui/core/Button";
import { ButtonProps } from "./Button.types";

import "./Button.scss";

const colors = {
  default: "default",
  primary: "primary",
  secondary: "secondary",
};

const ButtonComponent: React.FC<ButtonProps> = ({
  children,
  onClick,
  color,
  disabled,
  variant,
  href
}) => {
  const className = colors[color] ? `button ${colors[color]}` : "button";
  return (
    <Button
      variant={variant}
      color={color}
      className={className}
      onClick={onClick}
      disabled={disabled}
      href={href}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
