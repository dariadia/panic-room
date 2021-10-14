import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import type { Locale, Page, SinglePage as SinglePageProps } from 'types'

const HomePage: Page<SinglePageProps> = () => {
  return <h1>Hello World</h1>
}

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
