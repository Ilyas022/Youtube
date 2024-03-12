import { setupInterceptors } from '../support'

describe('Theme toggler', () => {
	beforeEach(() => {
		setupInterceptors()
		cy.visit('/')

		cy.wait('@getVideosInitQuery', { timeout: 0 })
		cy.wait('@getInitSuggestQuery', { timeout: 0 })
	})
	it('toggle theme', () => {
		cy.viewport(1920, 1080)
		cy.get('[data-testid="cypress-logo-text"]').should('exist').should('have.text', 'ModsenFilms')
		cy.get('label.toggle-switch').should('exist').click()

		cy.get('body').should('have.css', 'background-color').and('eq', 'rgb(15, 15, 15)')
	})
})
