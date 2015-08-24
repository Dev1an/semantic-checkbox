Package.describe({
  name: 'devian:semantic-checkbox',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A template for semantic-ui checkboxes',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use(['templating'], 'client');

  api.addFiles(['semantic-checkbox.js', 'semantic-checkbox.html'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('semantic-checkbox');
  api.addFiles('semantic-checkbox-tests.js');
});
