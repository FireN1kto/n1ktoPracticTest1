describe('Взаимодействие внутри пространства', () => {
    it('Негативный тест - не отправка пустого коментария', () => {
        cy.fixture('cypresssTest').then(data =>{
            cy.visit('https://dev.profteam.su/login')

            cy.get('.form-input--text').type(data.login_rabotodatel)
        
            cy.get('.form-input--password').type(data.password_rabotodatel)

            cy.wait(2000)
            cy.get(':nth-child(3) > .button').click()

            cy.wait(1000)
            cy.get(':nth-child(5) > .menu-item__item-name').click()

            cy.wait(1000)
            cy.get('.infinite-loader > :nth-child(1) > .button').click()

            cy.wait(1000)
            cy.get('.comment-textarea__buttons > :nth-child(2)').click()
        })
    })
})