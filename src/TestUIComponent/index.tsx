import React from "react";

import { TestUIComponentProps } from "./index.types";

import "./index.scss";

const TestUIComponent: React.FC<TestUIComponentProps> = ({ theme }) => (
  <div
    data-testid="test-component"
    className={`test-component test-component-${theme}`}
  >
    <h1 className="heading">I'm the test component</h1>
    <h2>Made with love by Harvey</h2>
  </div>
);

export default TestUIComponent;