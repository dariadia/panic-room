import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

import { MainLayout } from '@/layouts'

import type { Locale, Page, SinglePage as SinglePageProps } from 'types'

const Page404: Page<SinglePageProps> = () => {
  const { t } = useTranslation('error')
  return <h1>{t('something_went_wrong')}</h1>
}

Page404.Layout = ({ children, ...props }) => (
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
      ...(await serverSideTranslations(locale, ['common', 'error'])),
    },
  }
}

export default Page404
