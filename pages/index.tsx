import React, { useContext, useState } from 'react'
import { NextApiRequest, NextApiResponse } from 'next'

import { ThemeContext } from 'styled-components'
import Cookies from 'cookies'

import { MainLayout } from '@/layouts'

import {
  HomeScreen,
  MenuWrapper,
  WelcomeMessage,
  WelcomeScreen,
} from '@/components'
import { PANIC_ROOM_PREFERENCES } from 'constants/theme'

import type { Page, SinglePage as SinglePageProps } from 'types'

const HomePage: Page<SinglePageProps> = ({ preferences }) => {
  const hasSavedPreferences = preferences

  const [isMenuFocused, triggerMenuFocus] = useState(false)

  const { darkModeActive, theme } = useContext(ThemeContext)

  return (
    <>
      <MenuWrapper
        isMenuFocused={isMenuFocused}
        triggerMenuFocus={triggerMenuFocus}
      />
      {hasSavedPreferences ? (
        <HomeScreen preferences={preferences}>hello world</HomeScreen>
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
