import React, { useContext, useState } from 'react'
import { NextApiRequest, NextApiResponse } from 'next'
import Head from 'next/head'

import Cookies from 'cookies'
import { useCookies } from 'react-cookie'
import { getValueFromCookieString } from 'utils/theme'

import { ThemeContext } from 'styled-components'
import { MainLayout } from '@/layouts'
import {
  MenuWrapper,
  FortuneCookie,
  WelcomeMessage,
  WelcomeScreen,
} from '@/components'

import {
  ALLOW_MOTION,
  ALLOW_SOUNDS,
  PANIC_ROOM_PREFERENCES,
} from 'constants/theme'

import type { Page, Preferences, SinglePage as SinglePageProps } from 'types'

const FortuneCookiesPage: Page<SinglePageProps> = ({ preferences, host }) => {
  const hasSavedPreferences = preferences

  const { darkModeActive, theme } = useContext(ThemeContext)
  const [isMenuFocused, triggerMenuFocus] = useState(false)

  const [cookies] = useCookies([PANIC_ROOM_PREFERENCES])
  const userPreferences =
    preferences || (cookies[PANIC_ROOM_PREFERENCES] as Preferences)
  const allowMotion =
    typeof userPreferences === 'string'
      ? getValueFromCookieString({
          cookie: preferences as string,
          value: ALLOW_MOTION,
        })
      : userPreferences.allowMotion

  const allowSounds =
    typeof userPreferences === 'string'
      ? getValueFromCookieString({
          cookie: preferences as string,
          value: ALLOW_SOUNDS,
        })
      : userPreferences.allowSounds

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat"
          rel="stylesheet"
        />
      </Head>
      <MenuWrapper
        isMenuFocused={isMenuFocused}
        triggerMenuFocus={triggerMenuFocus}
      />
      {hasSavedPreferences ? (
        <FortuneCookie
          allowMotion={allowMotion}
          allowSounds={allowSounds}
          host={host}
        />
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

FortuneCookiesPage.Layout = ({ children, ...props }) => (
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
  const host = req.headers.host

  return {
    props: {
      preferences,
      host,
      url: req.url,
    },
  }
}

export default FortuneCookiesPage
