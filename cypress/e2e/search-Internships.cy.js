describe('Поиск стажировок', () => {
    it('Поиск', () => {
        cy.fixture('cypresssTest').then(data =>{
            cy.visit('https://dev.profteam.su/login')

            cy.get('.form-input--text').type(data.login)
            
            cy.get('.form-input--password').type(data.password)

            cy.wait(2000)
            cy.get(':nth-child(3) > .button').click()

            cy.wait(2000)
            cy.get(':nth-child(1) > .header__nav > [href="/internships"] > .header__label').click()

            cy.get('.form-input--text').type(data.search_title_internship)

            cy.get('div.search-input__field > .button').click()

            cy.wait(2000)
            cy.get('.custom-modal-mobile__buttons > .button').click()
        })
    });
    
    it('Выбор оплаты', () => {
        cy.fixture('cypresssTest').then(data =>{
            cy.visit('https://dev.profteam.su/login')

            cy.get('.form-input--text').type(data.login)
            
            cy.get('.form-input--password').type(data.password)

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
        })
    });

    it('Выбор занятости', () => {
        cy.fixture('cypresssTest').then(data =>{
            cy.visit('https://dev.profteam.su/login')

            cy.get('.form-input--text').type(data.login)
            
            cy.get('.form-input--password').type(data.password)

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
})