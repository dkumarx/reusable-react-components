import React from "react";
import { render } from "@testing-library/react";

import TopHeaderUIModule from "./GlobalTopHeader";
import { TopHeaderUIModuleProps } from "./GlobalTopHeader.types";

describe("Test Component", () => {
  let props: TopHeaderUIModuleProps;

  beforeEach(() => {
    props = {
      theme: "light",
    };
  });

  const renderComponent = () => render(<TopHeaderUIModule {...props} />);

  it("should have light className with default props", () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("test-component");

    expect(testComponent).toHaveClass("test-component-dark");
  });

  it("should have dark className with theme set as dark", () => {
    props.theme = "dark";
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("test-component");

    expect(testComponent).toHaveClass("test-component-dark");
  });
});
