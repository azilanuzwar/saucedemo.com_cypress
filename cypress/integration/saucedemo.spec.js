/// <reference types="cypress" />

describe ('filtering', function(){

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('Positive case from login until finish', () => {    
        cy.get('[data-test=username]').type('standard_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button]').click()
    
        ///at the home page:
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
    
        cy.get('.shopping_cart_badge').click()
    
        ///at the cart page:
        cy.get('[data-test=checkout]').click()
    
        ///at the check-out-step1-page:
        cy.get('[data-test=firstName]').type('Azila')
    
        cy.get('[data-test=lastName]').type('Nuzwar')
    
        cy.get('[data-test=postalCode]').type('12345')
    
        cy.get('[data-test=continue]').click()
    
        ///at the check-out-step2-page:
        cy.get('[data-test=finish]').click()
    
        ///at the checkout-complete page:
        cy.get('.complete-header').should('be.visible')
    })

    it('Login with Valid Username and Invalid Pass', () => {
        cy.get('[data-test=username]').type('standard_user')
        cy.get('[data-test=password]').type('passalah')
        cy.get('[data-test=login-button]').click()
        cy.get('[data-test=error]').should('be.visible')
    })

    it('Login with Invalid Username and Valid Pass', () => {
        cy.get('[data-test=username]').type('usernamesalah')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button]').click()
        cy.get('[data-test=error]').should('be.visible')
    })

    it('Login with Invalid Username and Invalid Pass', () => {
        cy.get('[data-test=username]').type('usernamesalah')
        cy.get('[data-test=password]').type('passalah')
        cy.get('[data-test=login-button]').click()
        cy.get('[data-test=error]').should('be.visible')
    })

    it('Login with Valid Username and Blank Pass', () => {
        cy.get('[data-test=username]').type('standard_user')
        cy.get('[data-test=login-button]').click()
        cy.contains('[data-test=error]', 'Password is required')
    })

    it('Login with Blank Username and Valid Pass', () => {
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button]').click()
        cy.contains('[data-test=error]', 'Username is required')
    })

    it.only('Login with Blank Username and Blank Pass', () => {
        cy.get('[data-test=login-button]').click()
        cy.contains('[data-test=error]', 'Username is required')
    })
})
