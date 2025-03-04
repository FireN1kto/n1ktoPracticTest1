describe('Авторизация', () => {
    it('Положительная', () => {
        cy.fixture('cypresssTest').then(data =>{
            cy.visit('https://dev.profteam.su/login');

            cy.get('.form-input--text').type(data.login_avtorisation);
        
            cy.get('.form-input--password').type(data.password_avtorisation);

            cy.get(':nth-child(3) > .button').click();
        })
    })
})