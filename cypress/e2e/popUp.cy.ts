import { setupInterceptors } from '../support'

describe('Popup', () => {
	beforeEach(() => {
		setupInterceptors()
		cy.visit('/')

		cy.wait('@getVideosInitQuery', { timeout: 0 })
		cy.wait('@getInitSuggestQuery', { timeout: 0 })
	})

	it('should opens on click by movie card', () => {
		cy.visit('/')

		cy.get('[data-testid="films container"] > :nth-child(1)').should('exist').click({ force: true })

		cy.get('[data-testid="popup"]').should('exist')
	})
})
