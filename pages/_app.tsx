import React, { ComponentType } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

import { appWithTranslation, useTranslation } from 'next-i18next'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from 'styled-normalize'

import { theme, isDarkMode, defaultTheme } from 'utils/theme'
import { isClient } from 'utils/env'

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

const App: React.FC<ApplicationProps> = ({ Component, pageProps }) => {
  const Layout: ComponentType = Component.Layout || React.Fragment
  const { t } = useTranslation(['common'])
  let userTheme = defaultTheme
  if (isClient()) {
    userTheme = isDarkMode() ? theme.darkTheme : theme.lightTheme
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <title>{t('app_title')}</title>
        <meta name="description" content={t('app_description')} />
        <meta
          name="og:image"
          property="og:image"
          content="/assets/panic-room.png"
        />
        <meta name="twitter:image" content="/assets/panic-room.png" />
        <link rel="manifest" href="/favicon/site.webmanifest.json" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
      </Head>
      <ThemeProvider theme={userTheme}>
        {Component.Layout ? (
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
      </ThemeProvider>
      <GlobalStyle />
    </>
  )
}

export default appWithTranslation(App)
