import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'
import { CartProvider } from 'hooks/use-cart'
import { useApollo } from 'utils/apollo'
import { AppProps } from 'next/app'

import Head from 'next/head'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <Head>
            <title>Won games Store</title>
            <link rel="shortcut icon" href="/img/icon-512.png" />
            <link rel="apple-touch-icon" href="/img/icon-512.png" />
            <link rel="manifest" href="/manifest.json" />
            <meta
              name="description"
              content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <GlobalStyles />
          <Component {...pageProps} />
        </CartProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
