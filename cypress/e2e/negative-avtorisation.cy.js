describe('Авторизация', () => {
    it('Негативная авторизация-неавторизованный логин', () => {
        cy.visit('https://dev.profteam.su/login');

        cy.get('.form-input--text').type('TsumbalM');
        
        cy.get('.form-input--password').type('Password1');

        cy.get(':nth-child(3) > .button').click();
    });

    it('Негативная авторизация-несуществующий пароль', () => {
        cy.visit('https://dev.profteam.su/login');

        cy.get('.form-input--text').type('testerStudent');
        
        cy.get('.form-input--password').type('QWEasd123');

        cy.get(':nth-child(3) > .button').click();
    });
})