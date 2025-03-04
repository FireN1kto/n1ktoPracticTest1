describe('Подтверждение отклика работодателем', () => {
    it('Подтверждение отклика', () => {
        cy.fixture('cypresssTest').then(data =>{
            cy.visit('https://dev.profteam.su/login')

            cy.get('.form-input--text').type(data.login_rabotodatel)
            
            cy.get('.form-input--password').type(data.password_rabotodatel)

            cy.wait(2000)
            cy.get(':nth-child(3) > .button').click()

            cy.wait(1000)
            cy.get(':nth-child(5) > .menu-item__item-name').click()

            cy.wait(2000)
            cy.get(':nth-child(2) > .responses-list-item__actions > :nth-child(1)').click()
        })
    })
})