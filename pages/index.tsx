import React, { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components'
import Cookies from 'cookies'

import { getUserPreferences } from 'utils/theme'
import { MainLayout } from '@/layouts'

import { MenuWrapper, WelcomeMessage, WelcomeScreen } from '@/components'

import type { Page, SinglePage as SinglePageProps } from 'types'
import { HomeScreen } from '@/components/HomeScreen'
import { PANIC_ROOM_PREFERENCES } from 'constants/theme'

const HomePage: Page<SinglePageProps> = () => {
  const hasSavedPreferences = getUserPreferences()

  const [isMenuFocused, triggerMenuFocus] = useState(false)

  const { darkModeActive, theme } = useContext(ThemeContext)

  return (
    <>
      <MenuWrapper
        isMenuFocused={isMenuFocused}
        triggerMenuFocus={triggerMenuFocus}
      />
      {hasSavedPreferences ? (
        <HomeScreen />
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
}): Promise<{ props: SinglePageProps }> {
  const cookies = new Cookies(req, res)
  const preferences = cookies.get(PANIC_ROOM_PREFERENCES) || null

  return {
    props: {
      locale: 'en-GB',
      preferences,
    },
  }
}

export default HomePage
