import React from "react";
import TestUIComponent from "./index";

export default {
  title: "TestComponent",
};

export const Primary = () => <TestUIComponent theme="primary" />;

export const Secondary = () => <TestUIComponent theme="secondary" />;
