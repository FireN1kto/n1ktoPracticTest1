describe('Регистрация', () => {
    it('Негативная регистрация пользователя - неправильный логин', () => {
        cy.visit('https://dev.profteam.su/registration')

        cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type('ЦымабалМ')
    });

    it('Неагтивная регистрация пользователя - невалидная почта', () => {
        cy.visit('https://dev.profteam.su/registration')

        cy.get('.form-input--email').type('maksimcymbal77gmail.com')
    });

    it('Негативная регистрация пользователя - неправильный пароль', () => {
        cy.visit('https://dev.profteam.su/registration')

        cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type('n1kt0 js')
    });

    it('Негативная регистрация пользователя - несовпадение паролей', () => {
        cy.visit('https://dev.profteam.su/registration')

        cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type('N1kt0-js')

        cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type('n1kt0-js')
    });
})