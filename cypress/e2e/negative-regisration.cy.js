describe('Регистрация', () => {
    it('Негативная регистрация пользователя - неправильный логин', () => {
        cy.fixture('cypresssTest').then(data =>{
            cy.visit('https://dev.profteam.su/registration')

            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.login_fail)
        })
    });

    it('Неагтивная регистрация пользователя - невалидная почта', () => {
        cy.fixture('cypresssTest').then(data =>{
            cy.visit('https://dev.profteam.su/registration')

            cy.get('.form-input--email').type(data.email_fail)
        })
    });

    it('Негативная регистрация пользователя - неправильный пароль', () => {
        cy.fixture('cypresssTest').then(data =>{
            cy.visit('https://dev.profteam.su/registration')

            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.password_fail)
        })
    });

    it('Негативная регистрация пользователя - несовпадение паролей', () => {
        cy.fixture('cypresssTest').then(data =>{
            cy.visit('https://dev.profteam.su/registration')

            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.password)

            cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type(data.password_fail)
        })
    });
})