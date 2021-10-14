import React, { ComponentType } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

import { ChakraProvider } from "@chakra-ui/react"
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from 'styled-normalize'

import { appWithTranslation, useTranslation } from 'next-i18next'

const GlobalStyle = createGlobalStyle`
 ${normalize}

 * {
    box-sizing: border-box;
  }
  html {
    height: 100%;
    white-space: pre-line;
    -webkit-font-smoothing: antialiased;
  }
`

type ApplicationProps = AppProps & {
  Component: AppProps['Component'] & { Layout?: React.FC }
}

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

const App: React.FC<ApplicationProps> = ({ Component, pageProps }) => {
  const Layout: ComponentType = Component.Layout || React.Fragment
  const { t } = useTranslation(['common'])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <title>{t('app_title')}</title>
        {/* <meta name="description" content={t('app_description')} /> */}
        {/* <meta
          name="og:image"
          property="og:image"
          content="/assets/share.png"
        /> */}
        {/* <meta name="twitter:image" content="/assets/share-avatar-v2.png" /> */}
        <link rel="manifest" href="/favicon/site.webmanifest.json" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
      </Head>
      <ChakraProvider>
        <ThemeProvider theme={theme}>
          {Component.Layout ? (
            <Layout {...pageProps}>
              <Component {...pageProps} />
            </Layout>
          ) : (
            <Component {...pageProps} />
          )}
        </ThemeProvider>
        </ChakraProvider>
      <GlobalStyle />
    </>
  )
}

export default appWithTranslation(App)
