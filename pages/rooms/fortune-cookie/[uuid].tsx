import React from 'react'
import styled from 'styled-components'

import Head from 'next/head'
import Link from 'next/link'
import { NextApiRequest, NextApiResponse } from 'next'

import { useCookies } from 'react-cookie'
import Cookies from 'cookies'

import { MainLayout } from '@/layouts'
import { Emoji, StyledMessage as FortuneMessage } from '@/components'

import { descrambleId } from 'utils/randomiser'
import { getValueFromCookieString, GOLDEN_SHADOW } from 'utils/theme'
import { appearSlow } from 'utils/animations'

import { buildRequestUrl, getProtocol } from 'hooks/use-api'

import {
  ALLOW_MOTION,
  FORTUNE_COOKIE,
  PANIC_ROOM_PREFERENCES,
} from 'constants/theme'
import {
  APP_PRODUCTION,
  FORTUNE_COOKIES_PATH_ONE,
  FORTUNE_COOKIE_ROOM,
} from 'constants/locations'
import { META_TEXTS, TEXTS } from 'constants/texts'

import type { Page, FortunePage, Preferences } from 'types'

const FortuneReadPage: Page<FortunePage> = ({ fortuneCookie, preferences }) => {
  const [cookies] = useCookies([PANIC_ROOM_PREFERENCES])

  const userPreferences =
    preferences || (cookies[PANIC_ROOM_PREFERENCES] as Preferences)

  const allowMotion =
    typeof userPreferences === 'string'
      ? getValueFromCookieString({
          cookie: preferences as string,
          value: ALLOW_MOTION,
        })
      : userPreferences?.allowMotion

  if (!fortuneCookie) return null

  const metaImagePath = `${APP_PRODUCTION}/assets/fortune-room.png`

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat"
          rel="stylesheet"
        />
        <title>{META_TEXTS.fortune_title}</title>
        <meta name="description" content={META_TEXTS.fortune_description} />
        <meta name="og:image" property="og:image" content={metaImagePath} />
        <meta name="twitter:image" content={metaImagePath} />
      </Head>
      <FortuneMessage fortuneCookie={fortuneCookie} allowMotion={allowMotion} />
      <Link href={FORTUNE_COOKIE_ROOM}>
        <StyledText>
          <Emoji label="fortune cookie">🥠</Emoji> {TEXTS.get_cookie}{' '}
          <Emoji label="magic wand">🪄</Emoji>
        </StyledText>
      </Link>
    </>
  )
}

const StyledText = styled('button')`
  font: 2rem/4rem monospace;
  display: block;
  outline: none;
  background: transparent;
  margin: 1rem auto;
  width: fit-content;
  padding: 1em;
  border: 1px solid ${GOLDEN_SHADOW};
  border-radius: 4px;
  color: inherit;
  animation: ${appearSlow} 2s 1;
  &:hover {
    cursor: pointer;
    transition: 0.2s all;
    border: 1px solid green;
    color: green;
  }
  &:focus {
    filter: drop-shadow(1px 2px 8px ${GOLDEN_SHADOW});
  }
`

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
