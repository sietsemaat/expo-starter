module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "react-native", "@typescript-eslint", "prettier"],
  env: {
    "react-native/react-native": true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "prettier/prettier": "error",
    "react-native/no-inline-styles": "warn",
    // Voeg hier je eigen regels toe indien gewenst
  },
};
