Package.describe({
  name: 'simple:rest-accounts-password',
  version: '1.0.1',

  // Brief, one-line summary of the package.
  summary: 'Get a login token to use with simple:rest',

  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/stubailo/meteor-rest',

  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use([
    'accounts-password',
    'check',
    'simple:json-routes@1.0.3',
    'simple:authenticate-user-by-token',
    'simple:rest-bearer-token-parser',
    'underscore',
  ], 'server');

  api.addFiles('rest-login.js', 'server');
});

Package.onTest(function (api) {
  api.use([
    'accounts-password',
    'check',
    'http',
    'simple:rest-accounts-password',
    'test-helpers',
    'tinytest',
  ]);

  api.addFiles('rest-login-tests.js');
});
