import React, { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { hasUserPreferences } from 'utils/theme'
import { MainLayout } from '@/layouts'

import { MenuWrapper, WelcomeMessage, WelcomeScreen } from '@/components'

import type { Locale, Page, SinglePage as SinglePageProps } from 'types'

const HomePage: Page<SinglePageProps> = () => {
  const hasSavedPreferences = hasUserPreferences()

  const [isMenuFocused, triggerMenuFocus] = useState(false)

  const { darkModeActive, theme } = useContext(ThemeContext)

  return (
    <>
      <MenuWrapper
        isMenuFocused={isMenuFocused}
        triggerMenuFocus={triggerMenuFocus}
      />
      {hasSavedPreferences ? (
        <MainScreen />
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

const MainScreen = () => <span>welcome</span>

HomePage.Layout = ({ children, ...props }) => (
  <MainLayout {...props}>{children}</MainLayout>
)

export async function getStaticProps({
  locale,
}: {
  locale: Locale
}): Promise<{ props: SinglePageProps }> {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default HomePage
