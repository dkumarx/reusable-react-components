import React from "react";
import TopHeaderUIModule from "./GlobalTopHeader";

export default {
  title: "Global Header Module",
};

export const Light = () => <TopHeaderUIModule theme="light">Button</TopHeaderUIModule>;

export const Dark = () => <TopHeaderUIModule theme="dark">Button2</TopHeaderUIModule>;
