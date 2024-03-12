import { RenderOptions, render } from '@testing-library/react'
import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { light } from '../global.styles'
import { AppStore, RootState, setupStore } from 'store/store'
import { ThemeProvider } from 'styled-components'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
	preloadedState?: Partial<RootState>
	store?: AppStore
}

export function renderWithProviders(
	ui: React.ReactElement,
	{
		preloadedState = {},
		// Automatically create a store instance if no store was passed in
		//@ts-ignore
		store = setupStore(preloadedState),
		...renderOptions
	}: ExtendedRenderOptions = {}
) {
	function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
		return (
			<Provider store={store}>
				<ThemeProvider theme={light}>{children}</ThemeProvider>
			</Provider>
		)
	}
	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
