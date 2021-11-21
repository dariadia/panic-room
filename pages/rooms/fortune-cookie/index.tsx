import React, { useContext, useState } from 'react'
import { NextApiRequest, NextApiResponse } from 'next'
import Head from 'next/head'

import Cookies from 'cookies'
import { useCookies } from 'react-cookie'

import { getValueFromCookieString } from 'utils/theme'
import { scrambleId } from 'utils/randomiser'
import { getProtocol } from 'hooks/use-api'

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
  FORTUNE_COOKIE,
  PANIC_ROOM_PREFERENCES,
} from 'constants/theme'

import type { Page, Preferences, FortunePage } from 'types'

const FortuneCookiesPage: Page<FortunePage> = ({
  preferences,
  host,
  url,
  fortuneCookieId,
}) => {
  const hasSavedPreferences = preferences

  const { darkModeActive, theme } = useContext(ThemeContext)
  const [isMenuFocused, triggerMenuFocus] = useState(false)

  const [cookies] = useCookies([PANIC_ROOM_PREFERENCES, FORTUNE_COOKIE])

  const fortuneId = fortuneCookieId || cookies[FORTUNE_COOKIE]

  let shareUrl = ''
  if (fortuneId) {
    const scrambledId = scrambleId(fortuneId)
    shareUrl = `${getProtocol(host as string)}${host}${url}/${scrambledId}`
  }

  const userPreferences =
    preferences || (cookies[PANIC_ROOM_PREFERENCES] as Preferences)

  const allowMotion =
    typeof userPreferences === 'string'
      ? getValueFromCookieString({
          cookie: preferences as string,
          value: ALLOW_MOTION,
        })
      : userPreferences?.allowMotion

  const allowSounds =
    typeof userPreferences === 'string'
      ? getValueFromCookieString({
          cookie: preferences as string,
          value: ALLOW_SOUNDS,
        })
      : userPreferences?.allowSounds

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
          shareUrl={shareUrl}
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
}): Promise<{ props: FortunePage }> {
  const cookies = new Cookies(req, res)
  const preferences = cookies.get(PANIC_ROOM_PREFERENCES) || null
  const fortuneCookieId = Number(cookies.get(FORTUNE_COOKIE)) || 0
  const host = req.headers.host

  return {
    props: {
      preferences,
      host,
      url: req.url,
      fortuneCookieId,
    },
  }
}

export default FortuneCookiesPage
