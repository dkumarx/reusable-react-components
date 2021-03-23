module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ${componentName} from "./${componentName}";
import { ${componentName}Props } from "./${componentName}.types";

describe("Test Component", () => {
  let props: ${componentName}Props;

  beforeEach(() => {
    props = {
      todo: "bar"
    };
  });

  const renderComponent = () => render(<${componentName} {...props} />);

  it("should render todo text correctly", () => {
    props.todo = "Reusable Component";
    const { getByTestId } = renderComponent();

    const component = getByTestId("${componentName}");

    expect(component).toHaveTextContent("Reusable Component");
  });
});
`,
  extension: `.test.tsx`
});
