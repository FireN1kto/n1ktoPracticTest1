const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1920, // Ширина окна
    viewportHeight: 1080, // Высота окна
  },
});
