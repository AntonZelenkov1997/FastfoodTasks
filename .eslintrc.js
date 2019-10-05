module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import'
  ],
  rules: {
    "react/destructuring-assignment": 0,
    "linebreak-style": 0,
    "no-unused-expressions": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "no-console": "off"
  },
};
