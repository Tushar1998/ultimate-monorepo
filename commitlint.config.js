const { getPackages } = require('@commitlint/config-lerna-scopes').utils;

module.exports = {
  extends: ['@commitlint/config-conventional', '@commitlint/parse'],
  rules  : {
    'scope-enum': (ctx) =>
      getPackages(ctx).then((packages) => [2, 'always', ['global', 'release', ...packages]]),
  },
};
