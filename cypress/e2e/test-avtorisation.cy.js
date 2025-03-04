describe('Авторизация', () => {
    it('Положительная', () => {
        cy.fixture('cypresssTest').then(data =>{
            cy.visit('https://dev.profteam.su/login');

            cy.get('.form-input--text').type(data.login_rabotodatel);
        
            cy.get('.form-input--password').type(data.password_rabotodatel);

            cy.get(':nth-child(3) > .button').click();
        })
    })
})