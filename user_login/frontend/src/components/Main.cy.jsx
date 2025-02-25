import React from 'react'
import Main from './Main'

// beforeEach('Oldal betöltés',()=>{
//   cy.visit('http://localhost:5173')
// })

describe('<Main />', () => {
  it('Komponens betöltődés', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Main />);
    cy.get('h1').should('have.text','Felhasználók kezelése');
    cy.get('img').should('be.visible');
  });
  
  
})