import { setupInterceptors } from '../support'

describe('Search input', () => {
	beforeEach(() => {
		setupInterceptors()
		cy.visit('/')

		cy.wait('@getVideosInitQuery', { timeout: 0 })
		cy.wait('@getInitSuggestQuery', { timeout: 0 })
	})

	it('load initial suggestions', () => {
		cy.get('input[placeholder="Search"]').should('exist').focus()

		cy.get('[data-testid="hint"').should('have.length', 2)
	})

	it('load initial videos', () => {
		cy.get('[data-testid="films container"]  > *').should('have.length', 16)
	})

	it('load hints according to search query', () => {
		cy.get('input[placeholder="Search"]').should('exist').type('news')

		cy.wait('@getNewsSuggestQuery', { timeout: 0 })

		cy.get('[data-testid="hint"').should('have.length', 2)
	})

	it('load videos according to search query', () => {
		cy.get('input[placeholder="Search"]').should('exist').type('news{enter}')

		cy.wait('@getVideosNewsQuery', { timeout: 0 })

		cy.get('[data-testid="films container"] > *').should('have.length', 14)
	})
})
