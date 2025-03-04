describe('Создание стажировки работодателем', () => {
    it('Создание стажировки', () => {
        cy.visit('https://dev.profteam.su/login')

        cy.get('.form-input--text').type('testerInstitution')
        
        cy.get('.form-input--password').type('Password1')

        cy.wait(2000)
        cy.get(':nth-child(3) > .button').click()

        cy.wait(1000)
        cy.get(':nth-child(8) > .menu-item__item-name').click()

        cy.wait(1000)
        cy.get('[data-v-e4f6348f=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button').click()

        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--').type('Тестрирование игры Maincraft')

        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(2) > .form-select > :nth-child(2) > .form-select__selected').click()

        cy.get('.form-select__items > :nth-child(1)').click()

        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-select > :nth-child(2) > .form-select__selected').click()

        cy.get('.form-select__items > :nth-child(1)').click()

        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > .form-control--responsive > .form-input--date').click()
        cy.wait(8000)

        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control--responsive > .form-input--date').click()
        cy.wait(10000)

        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area').type('dfbzdfbzdfbzdfbzdfb')

        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(7) > .form-control > .form-area').type('dfbzdfbzdffbzdfbzdffbzdfb')

        cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button').click()

        cy.wait(1000)
        cy.get(':nth-child(1) > .internship-item__info-wrapper > .internship-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button__background-color-green').click()
    })
})