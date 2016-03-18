/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'mapster-cms',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {}
    },

    APP: {
      api: 'http://localhost/mapster-api'
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' http://localhost/",
      'font-src': "'self' http://localhost/",
      'connect-src': "'self' http://localhost/",
      'img-src': "'self' http://localhost/",
      'style-src': "'self' http://localhost/",
      'media-src': "'self' http://localhost/"
    }
  };

  if (environment === 'development') {

  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
