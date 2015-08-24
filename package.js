Package.describe({
  name: 'devian:semantic-checkbox',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A template for semantic-ui checkboxes',
  // URL to the Git repository containing the source code for this package.
  git: 'https://Dev1an@github.com/Dev1an/semantic-checkbox',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use(['templating'], 'client');

  api.addFiles(['semantic-checkbox.html', 'semantic-checkbox.js'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('devian:semantic-checkbox');
  api.addFiles('semantic-checkbox-tests.js');
});
