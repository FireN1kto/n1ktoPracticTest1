describe('Регистрация', () => {
    it('Положительная регистрация пользователя', () => {
        cy.visit('https://dev.profteam.su/registration');

        cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type('TsumbalM')

        cy.get('.form-input--email').type('maksimcymbal77@gmail.com')

        cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type('N1kt0-js')

        cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type('N1kt0-js')
        
        cy.wait(2000)
        cy.get('.form__buttons > :nth-child(4)').click()

        cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type('Цымбал')

        cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type('Максим')


        cy.get(':nth-child(3) > .form-control--medium > .form-input--text').type('Вадимович')


        cy.wait(2000)
        cy.get(':nth-child(3) > .button').click()
    })
})