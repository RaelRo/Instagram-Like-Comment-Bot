Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

//Login function
describe('Login', function () {
    it('Sign in', function () {
        cy.visit('https://www.instagram.com/')
        cy.get('.aOOlW.bIiDR').contains('Accept All').click()
        cy.get('input[type="text"]').type('<E-mail>') //Insert e-mail address
        cy.get('input[type="password"]').type('<Password>') //Insert password
        cy.get('.sqdOP.L3NKy.y3zKF').contains('Log In').should('be.visible').click()
        cy.get('.cmbtv > .sqdOP').click()
        cy.get('.aOOlW.HoLwm').contains('Not Now').click()
        cy.visit('https://www.instagram.com/explore/tags/sunset/') //Specify hash-tag
        cy.get(':nth-child(2) > [style="flex-direction: column; padding-bottom: 0px; padding-top: 0px;"] > :nth-child(1) > :nth-child(1) > a > .eLAPa > ._9AhH0').click()


        //Specify how many images are to be processed. Specify the comment that will be posted.
        var genArr = Array.from({ length: 700 }, (v, k) => k + 1) //length: Number of processed images
        cy.wrap(genArr).each((index) => {
            cy.wait(2000)
            cy.get('.fr66n > .wpO6b > .QBdPU > span > ._8-yf5').click()
            cy.get('body').then(($body) => {
                if (Cypress.$(".Ypffh").length > 0) {
                    cy.get('.Ypffh').click()
                    cy.get('.Ypffh').type('beautiful') //Specify comment
                    cy.get('.X7cDz > .sqdOP').click({ force: true })
                    cy.wait(2000)
                    cy.get('._65Bje.coreSpriteRightPaginationArrow').click()
                } else {
                    cy.get('._65Bje.coreSpriteRightPaginationArrow').click()
                }
            })
        })

        //Logout
        cy.get('body').type('{esc}');
        cy.get('._6q-tv').click()
        cy.get(':nth-child(6) > .rBNOH').click()
    })
})



