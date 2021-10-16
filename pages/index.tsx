import React, { ChangeEvent, useContext, useState } from 'react'
import styled, { ThemeContext } from 'styled-components'

import { Trans, useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import {
  defaultPreferences,
  hasUserPreferences,
  setUserPreferences,
} from 'utils/theme'
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

const MainScreen = () => <span>welcome</span>

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

const WelcomeSection = styled('section')`
  font: 18px/24px monospace;
`

const Branding = styled('span')`
  font-weight: bold;
  font-family: fantasy;
  color: ${({ color }) => color};
`

const WelcomeMessage = () => {
  const { t } = useTranslation('common')
  const { darkModeActive, theme } = useContext(ThemeContext)

  const [preferences, setPreferences] = useState(defaultPreferences)
  const onCheckboxChange = (target: EventTarget & HTMLInputElement) =>
    setPreferences({ ...preferences, [target.name]: target.checked })

  return (
    <WelcomeSection>
      <p>
        <Trans
          i18nKey={`common:greeting`}
          components={{
            branding: (
              <Branding
                color={
                  darkModeActive
                    ? theme.darkTheme.brand
                    : theme.lightTheme.brand
                }
              />
            ),
          }}
        />
      </p>
      <p>
        <Trans
          i18nKey={`common:greeting_intro`}
          components={{
            focused: <span />,
          }}
        />
      </p>
      <article>
        <div>
          <input
            type="checkbox"
            id={t('motion')}
            name="allowMotion"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              onCheckboxChange(event.target)
            }
          />
          <label htmlFor={t('motion')}>{t('motion')}</label>
        </div>
        <div>
          <input
            type="checkbox"
            id={t('sounds')}
            name="allowSounds"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              onCheckboxChange(event.target)
            }
          />
          <label htmlFor={t('sounds')}>{t('sounds')}</label>
        </div>
        <Button onClick={() => setUserPreferences(preferences)}>
          {t('save')}
        </Button>
      </article>
    </WelcomeSection>
  )
}

const Button = styled('button')`
  cursor: pointer;
  margin-top: 16px;
`

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
