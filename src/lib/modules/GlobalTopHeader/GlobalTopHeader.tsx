
import React from "react";
import { TopHeaderUIModuleProps } from "./GlobalTopHeader.types";
import "./GlobalTopHeader.scss";


const TopHeaderUIModule: React.FC<TopHeaderUIModuleProps> = (props, { theme }) => (
  <header
    data-testid="test-component"
    className={`test-component test-component-${theme}`}
  >
    <div className="logo">
    <h1 className="heading">Header level 1 placeholder</h1>
    <h2>Top header level 2 placeholder</h2></div>
    <div className="app-switcher">
      {props.children}
    </div>
  </header>
);

export default TopHeaderUIModule;