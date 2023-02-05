import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import store from '../store'
import { GlobalStyles, theme } from '~/styles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>React Avançado</title>

        <meta
          name='description'
          content='A simple project to work with NextJS, React, TypeScript and Styled-Components'
        />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}
