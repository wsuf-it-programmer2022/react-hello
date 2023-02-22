module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  rules: {
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "prettier/prettier": "error",
  },
  plugins: ["react", "import", "jsx-a11y", "prettier"],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
