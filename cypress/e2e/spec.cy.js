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

  it('when user fills out the form, the information is reflected in the input fields', () => {
    cy.get('input[name="title"]').type('Dog photo')
    cy.get('input[name="title"]').should('have.value', 'Dog photo')
    cy.get('input[name="long_url"]').type('https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
    cy.get('input[name="long_url"]').should('have.value', 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
  })
})