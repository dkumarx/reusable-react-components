module.exports = (componentName) => ({
  content: `// // Generated with utils/compGenerator/create-component.js
@import "../variables.scss";
@import "../typography.scss";

.${componentName}--wrap {
  @include font-defaults;

  color: $primary;
}
`,
  extension: `.scss`
});
