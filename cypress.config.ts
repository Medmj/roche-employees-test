import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    defaultCommandTimeout: 500,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
