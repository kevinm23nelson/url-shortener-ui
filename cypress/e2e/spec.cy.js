describe('URL Shortener Page', () => {
  beforeEach(() => {
    cy.setupIntercepts()
    cy.visit("http://localhost:3000")
  })

  it('should display the correct title and required form elements', () => {
    cy.get('.App').should('contain.text', "URL Shortener")
    cy.get('form').within(() => {
      cy.get('input[name="title"]').should('have.attr', 'placeholder', 'Title...')
      cy.get('input[name="long_url"]').should('have.attr', 'placeholder', 'URL to Shorten...')
      cy.get('button').should('contain.text', 'Shorten Please!')
    })
  })

  it('should fetch the data from fixture', () => {
    cy.get('.urls-container')
      .get('.urls-card').should('have.length', 2)
      .get('.urls-card').first().should('contain.text', 'Awesome photo')
      .get('.urls-card').last().should('contain.text', 'Dog photo')
  })

  it('when user fills out the form, the information is reflected in the input fields', () => {
    cy.get('input[name="title"]').type('Dog photo')
    cy.get('input[name="title"]').should('have.value', 'Dog photo')
    cy.get('input[name="long_url"]').type('https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
    cy.get('input[name="long_url"]').should('have.value', 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
  })

  it('user can fill out and submit the form and post the new ur and intercept post from fixture', () => {
    cy.get('input[name="title"]').type('Cat photo')
    cy.get('input[name="long_url"]').type('https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
    cy.get('button').should('contain.text', 'Shorten Please!').click()

    cy.wait('@postURL')
    cy.get('.urls-container')
      .get('.urls-card').should('have.length', 3)
      .get('.urls-card').first().should('contain.text', 'Awesome photo')
      .get('.urls-card').last().should('contain.text', 'Cat photo')
  })
})