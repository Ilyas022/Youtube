import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './global.styles'
import { useTypedSelector } from 'hooks/useTypedSelector'

const RootComponent = () => {
	const { theme } = useTypedSelector((state) => state.theme)

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<App />
		</ThemeProvider>
	)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RootComponent />
		</Provider>
	</React.StrictMode>
)
