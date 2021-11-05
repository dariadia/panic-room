import React, { useState, useEffect, useContext } from 'react'
import Router from 'next/dist/client/router'
import { NextApiRequest, NextApiResponse } from 'next'

import { ThemeContext } from 'styled-components'
import Cookies from 'cookies'

import { MainLayout } from '@/layouts'

import {
  Loader,
  MenuWrapper,
  WelcomeMessage,
  WelcomeScreen,
} from '@/components'
import { HomeScreen } from '@/components/HomeScreen'
import { PANIC_ROOM_PREFERENCES } from 'constants/theme'

import type { Page, SinglePage as SinglePageProps } from 'types'

const HomePage: Page<SinglePageProps> = ({ preferences }) => {
  const hasSavedPreferences = preferences

  const [isMenuFocused, triggerMenuFocus] = useState(false)

  const { darkModeActive, theme } = useContext(ThemeContext)

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
      <MenuWrapper
        isMenuFocused={isMenuFocused}
        triggerMenuFocus={triggerMenuFocus}
      />
      {loading ? (
        <Loader />
      ) : hasSavedPreferences ? (
        <HomeScreen preferences={preferences} />
      ) : (
        <WelcomeScreen
          theme={darkModeActive ? theme.darkTheme : theme.lightTheme}
        >
          <WelcomeMessage triggerMenuFocus={triggerMenuFocus} />
        </WelcomeScreen>
      )}
    </>
  )
}

HomePage.Layout = ({ children, ...props }) => (
  <MainLayout {...props}>{children}</MainLayout>
)

export async function getServerSideProps({
  req,
  res,
}: {
  req: NextApiRequest
  res: NextApiResponse
}): Promise<{ props: SinglePageProps }> {
  const cookies = new Cookies(req, res)
  const preferences = cookies.get(PANIC_ROOM_PREFERENCES) || null

  return {
    props: {
      preferences,
    },
  }
}

export default HomePage
