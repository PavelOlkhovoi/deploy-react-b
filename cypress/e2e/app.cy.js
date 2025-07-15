describe('App Component', () => {
  beforeEach(() => {
    // Visit the root URL where your React app is served
    cy.visit('http://localhost:3000')
  })

  it('should display "Deploy B edited!!!" text', () => {
    // Find the element with class App-link and verify it contains the text
    cy.get('.App-link')
      .should('contain', 'Deploy B edited!!!')
  })
})
