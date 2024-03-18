import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { useTypedSelector } from 'hooks/useTypedSelector'
import App from 'src/App'
import { GlobalStyles } from 'src/styles/global.styles'
import { store } from 'store/store'

import { selectTheme } from './store/selectors'

const RootComponent = () => {
	const theme = useTypedSelector(selectTheme)

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<App />
		</ThemeProvider>
	)
}

createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<RootComponent />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
)
