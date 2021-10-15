import React from 'react'
import styled from 'styled-components'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

import { MainLayout } from '@/layouts'

import type { Locale, Page, SinglePage as SinglePageProps } from 'types'

const Title = styled('h1')`
  display: block;
  width: fit-content;
  margin: auto;
  padding-top: calc((100vh - 36px) / 2);
`

const Page404: Page<SinglePageProps> = () => {
  const { t } = useTranslation('error')
  return <Title>{t('something_went_wrong')}</Title>
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