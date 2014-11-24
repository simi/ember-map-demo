/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'letnar-frontend',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    adapterNamespace: 'api',
    contentSecurityPolicy: {
      'connect-src': "*",
      'script-src': "'unsafe-eval' *",
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.baseURL = '/ember-map-demo';
    ENV.adapterNamespace = 'ember-map-demo/api';
  }

  return ENV;
};
