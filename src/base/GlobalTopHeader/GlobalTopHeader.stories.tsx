// GlobalTopHeader.stories.js

import React from "react";

import { Button } from "../../components";
import { GlobalTopHeader } from "../";

const action = (e) => {
  console.log("__component_TOP__", e);
};

export default {
  title: "UI_GlobalTopHeader"
};

export const Basic = () => <GlobalTopHeader />;
export const WithPropsAndChild = () => (
  <GlobalTopHeader theme="primary">
    <Button variant="contained" onClick={() => action("clicked - primary")}>
      Primary Button
    </Button>
  </GlobalTopHeader>
);