/// <reference types="Cypress" />

describe('My First Test', () => {
  it('Visits the App', () => {
    cy.visit('http://localhost:4200/');
    cy.get('app-unit');
  });
});

describe('My First Test', () => {
  it('Visits the App', () => {
    cy.visit('http://localhost:4200/');
    cy.get('app-clan');
  });
});
