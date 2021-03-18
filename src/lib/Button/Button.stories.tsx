// Generated with util/create-component.js
import React from "react";
import Button from "./Button";

export default {
  title: "Button",
};

const action = (e) => {
  console.log("__component__", e);
};
// src/stories/Button.stories.js
export const Primary = () => (
  <Button color="primary" onClick={() => action("clicked - primary")}>
    Primary Button
  </Button>
);

export const Secondary = () => (
  <Button color="secondary" onClick={() => action("clicked - seconday")}>
    Secondary Button
  </Button>
);

export const Disabled = () => (
  <Button color="secondary" onClick={() => action("clicked - disabled")} disabled={true}>
    Disabled Button
  </Button>
);
