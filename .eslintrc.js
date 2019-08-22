module.exports = {
  extends: ['airbnb', 'prettier'],
  settings: {
    react: {
      pragma: 'React',
      version: '16.9'
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  plugins: [],
  rules: {
    'comma-dangle': 'off',
    indent: 'off',
    quotes: 0,
    'no-console': 1,
    'no-debugger': 1,
    'no-var': 1,
    'max-len': [
      'error',
      80,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],
    'arrow-parens': ['error', 'always'],
    semi: [1, 'always'],
    'class-methods-use-this': 0,
    'no-trailing-spaces': 0,
    'eol-last': 0,
    'jsx-quotes': 1,
  }
};
