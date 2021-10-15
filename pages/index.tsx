import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { hasUserPreferences } from 'utils/theme'
import { MainLayout } from '@/layouts'

import type { Locale, Page, SinglePage as SinglePageProps, Theme } from 'types'

const HomePage: Page<SinglePageProps> = () => {
  const hasSavedPreferences = hasUserPreferences()

  const { darkModeActive, theme } = useContext(ThemeContext)

  return hasSavedPreferences ? (
    <MainScreen />
  ) : (
    <WelcomeScreen theme={darkModeActive ? theme.darkTheme : theme.lightTheme}>
      <WelcomeMessage />
    </WelcomeScreen>
  )
}

const WelcomeMessage = () => <span>welcome</span>

const WelcomeScreen: React.FC<{ theme: Theme }> = styled('div')<{
  theme: Theme
}>`
  min-width: 260px;
  width: fit-content;
  max-width: calc(100% - 32px);
  min-height: 70vh;
  margin: auto;
  filter: drop-shadow(1px 2px 8px hsl(220deg 60% 50%));
  background: ${({ theme }) => theme.accent};
  border-radius: 4px;
  padding: 16px;
  color: #fafbfc;
`

const MainScreen = () => <div>main</div>

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
