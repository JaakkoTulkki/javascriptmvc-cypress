describe('My First Test', function() {
  it('displays a list of recipes', function() {
    cy.visit('http://localhost:63342/javascriptmvc/cookbook/index.html?_ijt=g2fvidt9sfq47raete74fgq913?');

    cy.get('#recipes li').should(recipes => {
      expect(recipes).to.have.length(5);
    })

    cy.get('#name').type('recipe-name');
    cy.get('#description').type('chickens and eggs');
    cy.get('input[type=submit]').click();
    cy.get('#recipes li').should(recipes => {
      expect(recipes).to.have.length(6);
    })
  })
})