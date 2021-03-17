import React from "react";
import TopHeaderUIModule from "./GlobalTopHeader";

export default {
  title: "Global Header Module",
};

export const LightTheme = () => <TopHeaderUIModule theme="light">Button</TopHeaderUIModule>;

export const DarkTheme = () => <TopHeaderUIModule theme="dark">Button2</TopHeaderUIModule>;
