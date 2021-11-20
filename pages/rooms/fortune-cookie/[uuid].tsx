import React, { useContext } from 'react'
import Head from 'next/head'
import { NextApiRequest, NextApiResponse } from 'next'

import { ThemeContext } from 'styled-components'
import Cookies from 'cookies'

import { MainLayout } from '@/layouts'

import { descrambleId } from 'utils/randomiser'
import { buildRequestUrl, getProtocol } from 'hooks/use-api'

import { FORTUNE_COOKIE, PANIC_ROOM_PREFERENCES } from 'constants/theme'
import { FORTUNE_COOKIES_PATH_ONE } from 'constants/locations'
import { META_TEXTS } from 'constants/texts'

import type { Page, FortunePage } from 'types'

const FortuneReadPage: Page<FortunePage> = ({ fortuneCookie }) => {
  const { darkModeActive, theme } = useContext(ThemeContext)
  console.log(darkModeActive, theme)
  if (!fortuneCookie) return null

  const { meta_image_key } = fortuneCookie

  const metaImagePath = `/assets/${meta_image_key}.png`

  return (
    <>
      <Head>
        <title>{META_TEXTS.fortune_title}</title>
        <meta name="description" content={META_TEXTS.fortune_description} />
        <meta name="og:image" property="og:image" content={metaImagePath} />
        <meta name="twitter:image" content={metaImagePath} />
      </Head>
      <span>hello world</span>
    </>
  )
}

FortuneReadPage.Layout = ({ children, ...props }) => (
  <MainLayout {...props}>{children}</MainLayout>
)

export async function getServerSideProps({
  req,
  res,
}: {
  req: NextApiRequest
  res: NextApiResponse
}): Promise<{ props: FortunePage }> {
  const cookies = new Cookies(req, res)
  const preferences = cookies.get(PANIC_ROOM_PREFERENCES) || null
  const cookieId = descrambleId(cookies.get(FORTUNE_COOKIE) as string)
  const host = req.headers.host

  const fortuneCookie = await fetch(
    `${getProtocol(host as string)}${host}/api${buildRequestUrl(
      `${FORTUNE_COOKIES_PATH_ONE}${cookieId}`,
    )}`,
    {
      method: 'GET',
    },
  ).then(result => result.json())

  return {
    props: {
      preferences,
      url: req.url,
      fortuneCookie,
    },
  }
}

export default FortuneReadPage
