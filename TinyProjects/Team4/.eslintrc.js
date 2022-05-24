module.exports = {
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  rules: {
    'class-methods-use-this': 'off',
    'comma-spacing': ['error', { before: false, after: true }],
    'no-trailing-spaces': 'error',
    'key-spacing': ['error', { afterColon: true }],
    'object-curly-spacing': ['error', 'always'],
    'object-curly-newline': [
      2,
      {
        ObjectExpression: { multiline: true, consistent: true },
        ObjectPattern: { multiline: true, consistent: true },
        ImportDeclaration: { multiline: true, consistent: true },
        ExportDeclaration: { multiline: true, consistent: true },
      },
    ],
    'no-use-before-define': ['error', {
      functions: false,
      variables: false,
    }],
    'react/jsx-props-no-multi-spaces': 2,
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'react/jsx-props-no-spreading': ['off'],
    '@typescript-eslint/explicit-function-return-type': [1, {
      allowExpressions: true,
    }],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': ['off'],

    'import/prefer-default-export': ['off'],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
    }],
    'import/extensions': ['error', {
      js: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'max-len': [2, {
      code: 120,
      tabWidth: 2,
      ignoreUrls: true,
      ignoreComments: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
      ignoreTrailingComments: true,
    }],
  },
};
