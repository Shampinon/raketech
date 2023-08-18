module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  root: true,
  ignorePatterns: ['node_modules/'],
  rules: {
    'object-curly-spacing': ['warn', 'always'],
    curly: 'error',
    'keyword-spacing': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/no-explicit-any': 'error',
    'import/prefer-default-export': 0,
    'no-console': 'error',
    'no-debugger': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    'no-param-reassign': 0,
    'padding-line-between-statements': 'error',
    // same max-len from air-bnb config
    'max-len': [
      'error',
      100,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
      },
    ],
  },
};
