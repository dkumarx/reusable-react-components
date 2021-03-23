module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
export interface ${componentName}Props {
    todo: string;
}
`,
  extension: `.types.ts`
});
