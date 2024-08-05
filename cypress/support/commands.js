Cypress.Commands.add('setupIntercepts', () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls' , {
        statusCode: 200,
        fixture: 'urls.json'
    }).as('getUrls')
})