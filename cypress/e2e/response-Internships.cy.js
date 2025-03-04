describe('Отклик на стажировку', () => {
    it('Отклик', () => {
        cy.fixture('cypresssTest').then(data =>{
            cy.visit('https://dev.profteam.su/login')

            cy.get('.form-input--text').type(data.login)
        
            cy.get('.form-input--password').type(data.password)

            cy.wait(2000)
            cy.get(':nth-child(3) > .button').click()

            cy.wait(2000)
            cy.get(':nth-child(1) > .header__nav > [href="/internships"] > .header__label').click()

            cy.wait(2000)
            cy.get(':nth-child(1) > .internship-item__info-wrapper > .internship-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button__background-color-green').click()
        })
    });
})