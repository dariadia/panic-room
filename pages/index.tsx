import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { hasUserPreferences } from 'utils/theme'

import type { Locale, Page, SinglePage as SinglePageProps } from 'types'

const HomePage: Page<SinglePageProps> = () => {
  let hasSavedPreferences = false

  hasSavedPreferences = hasUserPreferences()

  return hasSavedPreferences ? <MainScreen /> : <WelcomeScreen />
}

const WelcomeScreen = () => <div>welcome</div>

const MainScreen = () => <div>main</div>

export async function getStaticProps({
  locale,
}: {
  locale: Locale
}): Promise<{ props: SinglePageProps }> {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
    },
  }
}

export default HomePage
