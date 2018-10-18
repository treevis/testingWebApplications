describe('PHPTravels', () => {
  it('Meets E2E requirements', () => {
    cy.visit('/');
    
    cy.get('h2').should('have.html', 'Application Test Drive.')
  })
})