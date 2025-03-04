describe('Авторизация', () => {
    it('Положительная', () => {
        cy.visit('https://dev.profteam.su/login');

        cy.get('.form-input--text').type('testerStudent');
        
        cy.get('.form-input--password').type('Password1');

        cy.get(':nth-child(3) > .button').click();
    })
})