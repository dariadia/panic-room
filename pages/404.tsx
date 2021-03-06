import React from 'react'
import styled from 'styled-components'

import { MainLayout } from '@/layouts'

import { TEXTS } from 'constants/texts'

import type { Page, SinglePage as SinglePageProps } from 'types'

const Title = styled('h1')`
  display: block;
  width: fit-content;
  margin: auto;
  padding-top: calc((100vh - 36px) / 2);
`

const Page404: Page<SinglePageProps> = () => {
  return <Title>{TEXTS.something_went_wrong}</Title>
}

Page404.Layout = ({ children, ...props }) => (
  <MainLayout {...props} url="404">
    {children}
  </MainLayout>
)

export default Page404
