module.exports = {
  env: {
    "browser": true,
    "es2021": true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "airbnb",
    "airbnb-typescript"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint"
  ],
  rules: {
    "react/function-component-definition": ["error", { "namedComponents": "arrow-function" }],
    "react/jsx-key": "error",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
   ]
  },
};
