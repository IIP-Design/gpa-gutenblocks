module.exports = {
  'extends': ['@gpa-lab/eslint-config', '@gpa-lab/eslint-config/react'],
  ignorePatterns: ['dist/', 'vendor/'],
  parser: 'babel-eslint',
  rules: {
    'node/no-unpublished-import': [
      'error', {
        allowModules: ['prop-types'],
      },
    ],
  },
};
