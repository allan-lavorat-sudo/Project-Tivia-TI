const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: "Cypress/e2e/**/*.spec.js", // Certifique-se de que isso corresponde à estrutura
    baseUrl: "http://localhost:3000", // Ajuste conforme necessário
  },
});

