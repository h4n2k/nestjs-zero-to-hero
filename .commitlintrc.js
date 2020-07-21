const types = [
  'build',
  'ci',
  'chore',  //build configuration
  'docs',
  'feat', //new feature
  'fix',
  'perf', //performance
  'refactor',
  'revert', //branch backtracking
  'style',
  'test',
];

module.exports = {
  // https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional
  extends: ['@commitlint/config-conventional'],

  rules: {
    'type-enum': [2, 'always', types],
  },
};
