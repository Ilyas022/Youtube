import { setupInterceptors } from '../support'

describe('Category bar', () => {
	beforeEach(() => {
		setupInterceptors()
		cy.visit('/')

		cy.wait('@getVideosInitQuery', { timeout: 0 })
		cy.wait('@getInitSuggestQuery', { timeout: 0 })
	})

	it('change video category', () => {
		cy.contains('Movies').click().should('have.text', 'Movies')
	})
})
