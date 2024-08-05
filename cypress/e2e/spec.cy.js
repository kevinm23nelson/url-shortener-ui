describe('URL Shortener Page', () => {
  beforeEach(() => {
    cy.setupIntercepts()
    cy.visit("http://localhost:3000")
  })

  it('should display the correct title, required form elements, and existing url from BE(fixture)', () => {
    cy.get('.App').should('contain.text', "URL Shortener")
    cy.get('form').within(() => {
      cy.get('input[name="title"]').should('have.attr', 'placeholder', 'Title...')
      cy.get('input[name="long_url"]').should('have.attr', 'placeholder', 'URL to Shorten...')
      cy.get('button').should('contain.text', 'Shorten Please!')
    })
  })

  
})