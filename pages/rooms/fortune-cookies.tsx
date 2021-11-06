import React, { useState } from 'react'
import { NextApiRequest, NextApiResponse } from 'next'
import Cookies from 'cookies'

import { MainLayout } from '@/layouts'

import { MenuWrapper } from '@/components'
import { PANIC_ROOM_PREFERENCES } from 'constants/theme'

import type { Page, SinglePage as SinglePageProps } from 'types'

const FortuneCookiesPage: Page<SinglePageProps> = ({ preferences }) => {
  const [isMenuFocused, triggerMenuFocus] = useState(false)
  console.log(preferences)
  return (
    <>
      <MenuWrapper
        isMenuFocused={isMenuFocused}
        triggerMenuFocus={triggerMenuFocus}
      />
      hello world
    </>
  )
}

FortuneCookiesPage.Layout = ({ children, ...props }) => (
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

export default FortuneCookiesPage
