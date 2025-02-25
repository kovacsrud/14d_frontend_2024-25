describe('Login teszt', () => {
  it('Login teszt', () => {
    cy.visit('http://localhost:5173');
    cy.get('a.font-medium:nth-child(2)').should('have.text','Belépés').click();
    cy.get('#username').type('test1331');
    cy.get('#password').type('Titok_12');
    cy.get('button.my-5').click();
    cy.get('a').should('contains.text','Védett infó');
    cy.get('a.font-medium:nth-child(6)').click();
  })
})