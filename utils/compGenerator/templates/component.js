module.exports = (componentName) => ({
  content: `// Generated with utils/compGenerator/create-component.js
import React from "react";

import { ${componentName}Props } from "./${componentName}.types";

import "./${componentName}.scss";

const ${componentName}: React.FC<${componentName}Props> = ({ todo }) => (
    <div data-testid="${componentName}" className="${componentName}--wrap">{todo}</div>
);

export default ${componentName};

`,
  extension: `.tsx`
});
