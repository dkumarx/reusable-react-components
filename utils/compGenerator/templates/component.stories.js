module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from "react";
import ${componentName} from "./${componentName}";

export default {
    title: "${componentName}"
};

export const ${componentName} = () => <${componentName} todo="todo-val" />;
`,
  extension: `.stories.tsx`
});
