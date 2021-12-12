import React, { ComponentType, useState, useEffect } from 'react'
import Router from 'next/router'
import Head from 'next/head'

import { AppProps } from 'next/app'
import { CookiesProvider } from 'react-cookie'

import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from 'styled-normalize'
import withDarkMode from 'next-dark-mode'

import { TEXTS } from 'constants/texts'
import { theme } from 'utils/theme'
import { Loader } from '@/components'
import { APP_PRODUCTION } from 'constants/locations'

const GlobalStyle = createGlobalStyle`
 ${normalize}

 * {
    box-sizing: border-box;
  }
  html {
    height: 100%;
    white-space: pre-line;
    font-family: monospace;
    -webkit-font-smoothing: antialiased;
  }
`

type ApplicationProps = AppProps & {
  Component: AppProps['Component'] & { Layout?: React.FC }
  darkMode?: typeof withDarkMode
}

const App: React.FC<ApplicationProps> = ({
  Component,
  pageProps,
  darkMode,
}) => {
  const Layout: ComponentType = Component.Layout || React.Fragment

  const [loading, setLoading] = useState(false)
  const startLoading = () => setLoading(true)
  const stopLoading = () => setLoading(false)

  useEffect(() => {
    Router.events.on('routeChangeStart', startLoading)
    Router.events.on('routeChangeComplete', stopLoading)
    return () => {
      Router.events.off('routeChangeStart', startLoading)
      Router.events.off('routeChangeComplete', stopLoading)
    }
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <title>{TEXTS.app_title}</title>
        <meta name="description" content={TEXTS.app_description} />
        <meta
          name="og:image"
          property="og:image"
          content={`${APP_PRODUCTION}/assets/panic-room_v2.png`}
        />
        <meta
          name="twitter:image"
          content={`${APP_PRODUCTION}/assets/panic-room_v2.png`}
        />
        <link rel="manifest" href="/favicon/site.webmanifest.json" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
      </Head>
      <ThemeProvider theme={{ ...darkMode, theme }}>
        <CookiesProvider>
          {Component.Layout ? (
            <Layout {...pageProps}>
              {loading ? <Loader /> : <Component {...pageProps} />}
            </Layout>
          ) : (
            <Component {...pageProps} />
          )}
        </CookiesProvider>
      </ThemeProvider>
      <GlobalStyle />
    </>
  )
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default withDarkMode(App, { defaultMode: 'dark' })
