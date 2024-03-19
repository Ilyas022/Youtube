import { setupInterceptors } from '../support'

describe('Mobile menu', () => {
	beforeEach(() => {
		setupInterceptors()
		cy.visit('/')

		cy.wait('@getVideosInitQuery', { timeout: 0 })
		cy.wait('@getInitSuggestQuery', { timeout: 0 })
	})

	it('open menu', () => {
		cy.viewport(400, 600)
		cy.get('[data-testid="burger btn"]').should('exist').click()
		cy.get('[data-testid="mobile menu"]')
			.should('exist')
			.should('have.css', 'background-color')
			.and('eq', 'rgba(0, 0, 0, 0.75)')
	})
})
