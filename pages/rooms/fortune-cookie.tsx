import React, { useContext, useState } from 'react'
import { NextApiRequest, NextApiResponse } from 'next'
import Cookies from 'cookies'

import { ThemeContext } from 'styled-components'
import { MainLayout } from '@/layouts'

import {
  MenuWrapper,
  FortuneCookie,
  WelcomeMessage,
  WelcomeScreen,
} from '@/components'
import { PANIC_ROOM_PREFERENCES } from 'constants/theme'

import type { Page, SinglePage as SinglePageProps } from 'types'

const FortuneCookiesPage: Page<SinglePageProps> = ({ preferences }) => {
  const hasSavedPreferences = preferences

  const { darkModeActive, theme } = useContext(ThemeContext)
  const [isMenuFocused, triggerMenuFocus] = useState(false)

  return (
    <>
      <MenuWrapper
        isMenuFocused={isMenuFocused}
        triggerMenuFocus={triggerMenuFocus}
      />
      {hasSavedPreferences ? (
        <FortuneCookie />
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

  return {
    props: {
      preferences,
    },
  }
}

export default FortuneCookiesPage
