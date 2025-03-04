describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://dev.profteam.su/internships')

        cy.get('.form-input--text').type('разработчик под столом Фунтика')

        cy.get('div.search-input__field > .button').click()

        cy.get(':nth-child(2) > .radio-component__input').click()

        cy.get(':nth-child(3) > .radio-component__input').click()

        cy.get('.form-select__selected').click()

        cy.get('.custom-modal-mobile__buttons > .button').click()
    })
})