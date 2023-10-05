const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: false,

  reporterOptions: {

    charts: true,

    reportPageTitle: 'Cypress Inline Reporter',

    embeddedScreenshots: true,

    inlineAssets: true, //Adds the asserts inline

  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config),
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    testIsolation: false,
    viewportWidth: 1500,
    viewportHeight: 1500
  },
})

