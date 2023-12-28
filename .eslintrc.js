module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'jsx-a11y', 'react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    //react
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.ts', '.tsx'],
      },
    ],
    'react/prop-types': 'error',
    //typescript
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    // Possible Problems https://eslint.org/docs/latest/rules/#possible-problems
    'no-await-in-loop': 'error',
    'array-callback-return': 'error',
    'no-duplicate-imports': 'error',
    'no-constant-binary-expression': 'error',
    'no-constructor-return': 'error',
    'no-promise-executor-return': 'error',
    'no-self-compare': 'error',
    'no-template-curly-in-string': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable-loop': 'error',
    'no-unused-vars': 'error',
    'no-unused-private-class-members': 'error',
    'no-use-before-define': 'error',
    'require-atomic-updates': 'error',
    'no-console': 'warn',
    // Suggestions https://eslint.org/docs/latest/rules/#suggestions
    'arrow-body-style': ['error', 'as-needed'],
    'accessor-pairs': 'error',
    'block-scoped-var': 'error',
    'consistent-return': 'error',
    curly: ['error', 'multi', 'consistent'],
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': ['error'],
    'dot-notation': 'error',
    eqeqeq: ['error', 'smart'],
    'func-name-matching': 'error',
    camelcase: [
      'error',
      {
        properties: 'always',
        ignoreDestructuring: false,
        ignoreImports: true,
        ignoreGlobals: false,
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    indent: [
      'error',
      2,
      { offsetTernaryExpressions: true, ignoredNodes: ['ConditionalExpression', 'MemberExpression'], SwitchCase: 1 },
    ],
    quotes: ['error', 'single'],
    'jsx-a11y/click-events-have-key-events': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
