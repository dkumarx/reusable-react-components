
import React from "react";
import { GlobalTopHeaderProps } from "./GlobalTopHeader.types";
import "./GlobalTopHeader.scss";


const GlobalTopHeader: React.FC<GlobalTopHeaderProps> = (props) => (
  <header
    data-testid="header"
    className={`header header--${props.theme}`}
  >
    <div className="logo">
    <h1 className="heading">Header level 1 placeholder</h1>
    <h2>Top header level 2 placeholder</h2></div>
    {props.children ? <div className="app-switcher">
      {props.children}
    </div> : null}
  </header>
);

export default GlobalTopHeader;