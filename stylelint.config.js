module.exports = {
  extends: "stylelint-config-standard-scss",
  rules: {
    "scss/at-import-partial-extension": "always",
    "scss/at-mixin-argumentless-call-parentheses": "never",
    "scss/dollar-variable-pattern": /^[a-z][a-zA-Z0-9]*$/,
    "selector-class-pattern": /^[a-z][a-zA-Z0-9]*$/,
    "keyframes-name-pattern": /^[a-z][a-zA-Z0-9]*$/,
    "length-zero-no-unit": null,
  },
};
