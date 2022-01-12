import { SessionProvider as AuthProvider } from 'next-auth/react'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'
import { CartProvider } from 'hooks/use-cart'
import { useApollo } from 'utils/apollo'
import { AppProps } from 'next/app'

import Head from 'next/head'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import NextNProgress from 'nextjs-progressbar'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <AuthProvider session={pageProps.session}>
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
            <NextNProgress
              color="#F231A5"
              startPosition={0.3}
              stopDelayMs={200}
              height={5}
            />
            <Component {...pageProps} />
          </CartProvider>
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  )
}

export default App
