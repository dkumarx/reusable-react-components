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
export const Default = () => (
  <>
    <Button onClick={() => action("clicked - primary")}>Default Button</Button>
    <Button color="primary" onClick={() => action("clicked - primary")}>
      Primary Button
    </Button>
    <Button color="secondary" onClick={() => action("clicked - seconday")}>
      Secondary Button
    </Button>
    <Button
      color="secondary"
      onClick={() => action("clicked - disabled")}
      disabled={true}
    >
      Disabled Button
    </Button>
  </>
);

export const VariantContained = () => (
  <>
    <Button variant="contained" onClick={() => action("clicked - primary")}>
      Default Button
    </Button>
    <Button
      color="primary"
      variant="contained"
      onClick={() => action("clicked - primary")}
    >
      Primary
    </Button>
    <Button
      color="secondary"
      variant="contained"
      onClick={() => action("clicked - primary")}
    >
      Secondary
    </Button>
    <Button variant="contained" disabled onClick={() => action("clicked - primary")}>
      Disabled
    </Button>
    <Button variant="contained" color="primary" href="#contained-buttons">
      Link
    </Button>
  </>
);
