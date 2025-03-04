describe('Поиск стажировок', () => {
    it('Поиск', () => {
        cy.visit('https://dev.profteam.su/login')

        cy.get('.form-input--text').type('TsumbalM')
        
        cy.get('.form-input--password').type('N1kt0-js')

        cy.wait(2000)
        cy.get(':nth-child(3) > .button').click()

        cy.wait(2000)
        cy.get(':nth-child(1) > .header__nav > [href="/internships"] > .header__label').click()

        cy.get('.form-input--text').type('Дворник')

        cy.get('div.search-input__field > .button').click()

        cy.wait(2000)
        cy.get('.custom-modal-mobile__buttons > .button').click()

    });
    
    it('Выбор оплаты', () => {
        cy.visit('https://dev.profteam.su/login')

        cy.get('.form-input--text').type('TsumbalM')
        
        cy.get('.form-input--password').type('N1kt0-js')

        cy.wait(2000)
        cy.get(':nth-child(3) > .button').click()

        cy.wait(2000)
        cy.get(':nth-child(1) > .header__nav > [href="/internships"] > .header__label').click()

        cy.wait(2000)
        cy.get(':nth-child(2) > .radio-component__input').click()

        cy.wait(2000)
        cy.get(':nth-child(3) > .radio-component__input').click()

        cy.wait(2000)
        cy.get('.custom-modal-mobile__buttons > .button').click()
    });

    it('Выбор занятости', () => {
        cy.visit('https://dev.profteam.su/login')

        cy.get('.form-input--text').type('TsumbalM')
        
        cy.get('.form-input--password').type('N1kt0-js')

        cy.wait(2000)
        cy.get(':nth-child(3) > .button').click()

        cy.wait(2000)
        cy.get(':nth-child(1) > .header__nav > [href="/internships"] > .header__label').click()
        
        cy.wait(2000)
        cy.get('.form-select__selected').click()

        cy.wait(2000)
        cy.get('.form-select__items > :nth-child(3)').click()

        cy.wait(2000)
        cy.get('.form-select__selected').click()

        cy.get('.form-select__items > :nth-child(2)').click()

        cy.wait(2000)
        cy.get('.custom-modal-mobile__buttons > .button').click()
    })
})