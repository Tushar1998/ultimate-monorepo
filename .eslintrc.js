/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  extends: [
    'airbnb-typescript',
    'plugin:import/typescript',
    // 'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // 'prettier/prettier': 'warn',
    'react/jsx-filename-extension': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/interface-name-prefix': 'off',
    'no-underscore-dangle': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/no-unused-vars': 1,
    'key-spacing': [2, { align: 'colon' }],
  },
  plugins: ['import', '@typescript-eslint', 'prettier'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};
