
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { store } from '../store'
import { GlobalStyle } from '../styles/global'
import { theme } from '../styles/theme'
import { AppState } from '../store/index'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme} >
			<Provider store={store}>
				<GlobalStyle />
				<Component {...pageProps} />
			</Provider>
		</ThemeProvider>
	)
}

export default MyApp
