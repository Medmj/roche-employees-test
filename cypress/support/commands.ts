/// <reference types="cypress" />

Cypress.Commands.add("visitHomePage", () => {
  cy.visit("/employees.html");
});

declare namespace Cypress {
  interface Chainable {
    visitHomePage(): Chainable<Element>;
  }
}
