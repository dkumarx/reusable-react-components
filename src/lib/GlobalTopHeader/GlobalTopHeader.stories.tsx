import React from "react";
import Button from "../Button/Button";
import TopHeaderUIModule from "./GlobalTopHeader";

export default {
  title: "Global Header Module",
};

const action = (e) => {
  console.log("__component_TOP__", e);
};
export const LightTheme = () => (
  <TopHeaderUIModule theme="light">
    <Button color="primary" onClick={() => action("clicked - primary")}>
      Primary Button
    </Button>
  </TopHeaderUIModule>
);

export const DarkTheme = () => (
  <TopHeaderUIModule theme="dark">
    {" "}
    <Button color="seconday" onClick={() => action("clicked - Secondary")}>
      Seconday Button
    </Button>
  </TopHeaderUIModule>
);
