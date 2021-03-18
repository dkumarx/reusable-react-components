import React from "react";
import { render } from "@testing-library/react";

import TopHeaderUIModule from "./GlobalTopHeader";
import { TopHeaderUIModuleProps } from "./GlobalTopHeader.types";

describe("Global Top header", () => {
  let props: TopHeaderUIModuleProps;

  beforeEach(() => {
    props = {
      theme: "light",
    };
  });

  const renderComponent = () => render(<TopHeaderUIModule {...props} />);

  it("should have light className with default props", () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("header");

    expect(testComponent).toHaveClass("header--dark");
  });

  it("should have dark className with theme set as dark", () => {
    props.theme = "dark";
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("header");

    expect(testComponent).toHaveClass("header--dark");
  });
});
