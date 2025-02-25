describe('Főoldal tesztelése', () => {

  beforeEach('Oldal betöltés',()=>{
     cy.visit('http://localhost:5173')
  });

  it('Cím megjelenik-e', () => {
    cy.get('h1').should('have.text','Felhasználók kezelése');
  });
  it('Belépés menüpont',()=>{
    cy.get('a.font-medium:nth-child(2)').should('have.text','Belépés');
    ///html/body/div/div/nav/div[2]/div/a[2]
    //a.font-medium:nth-child(2)
  });
  it('Regisztráció menüpont',()=>{
    cy.get('.m-5').should('have.text','Regisztráció');
    
  });
  it('Kép a főoldalon',()=>{
    cy.get('.object-cover').should('be.visible');
    
  });
  it('Logó a menüben',()=>{
    cy.get('div.justify-between > a:nth-child(1) > img:nth-child(1)').should('be.visible');
    
  });

})