import React, { useContext, useState, useEffect } from 'react'
import styled, { ThemeContext } from 'styled-components'

import { GOLDEN_SHADOW, MAIN_PADDING } from 'utils/theme'
import { appear, rollOut, rollOutGlow, stay } from 'utils/animations'

import { MESSAGE_ARIA } from 'constants/arias'

import { Emoji } from '.'

import type { FortuneCookie as FortuneCookieType } from 'types'

type TextProps = { color: string; allowMotion: boolean }

const FortuneText: React.FC<TextProps> = styled('span')<TextProps>`
  color: ${({ color }) => color};
  display: block;
  max-width: 60vw;
  margin: auto;
  padding-top: 22vw;
  text-align: center;
  font: 2rem/4rem monospace;
  animation: ${({ allowMotion }) => (allowMotion ? appear : stay)} 1.5s 1;
  @media (max-width: 500px) {
    font: 1rem/2rem monospace;
    padding-top: 40vw;
    max-width: 80vw;
  }
`

const Message = ({
  fortuneCookie,
  allowMotion,
}: WithFortuneCookieData): JSX.Element | null => {
  const { darkModeActive, theme } = useContext(ThemeContext)
  const [isTextShown, showText] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      showText(true)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  if (!fortuneCookie) return null
  const {
    text,
    emoji,
    aria_label,
    source_link,
    source_title,
    source_author,
  } = fortuneCookie

  return (
    <>
      <div title={MESSAGE_ARIA} role="img" aria-label={MESSAGE_ARIA} />
      {isTextShown && (
        <FortuneText
          color={darkModeActive ? theme.darkTheme.text : theme.lightTheme.text}
          allowMotion={allowMotion as boolean}
        >
          {text}
          {emoji && (
            <Emoji
              className="fortune-cookie_emoji"
              label={aria_label as string}
            >
              {emoji}
            </Emoji>
          )}
          <div className="fortune-cookie_source">
            <a href={source_link} target="_blank">
              {source_title}
            </a>{' '}
            {source_author}
          </div>
        </FortuneText>
      )}
    </>
  )
}

type WithFortuneCookieData = {
  fortuneCookie: FortuneCookieType
  allowMotion?: boolean
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const StyledMessage: React.FC<WithFortuneCookieData> = styled(
  'article',
).attrs((props: WithFortuneCookieData) => ({
  children: (
    <Message
      fortuneCookie={props.fortuneCookie}
      allowMotion={props.allowMotion}
    />
  ),
}))`
  position: relative;
  margin: 0 auto;
  width: calc(100vw - ${MAIN_PADDING * 2}px);
  > div {
    animation: ${rollOutGlow} 1.5s 1;
    height: 30vw;
    width: 15vw;
    position: absolute;
    left: calc((100vw - 15vw) / 2);
    z-index: 1;
    top: -10vw;
  }
  > div::before {
    display: block;
    content: '';
    animation: ${rollOut} 1.5s 1;
    margin: 50px 0 0 -50px;
    height: 30vw;
    background: center / 15vw 30vw no-repeat url('/assets/parchement.svg');
    transform: rotate(90deg);
    filter: drop-shadow(1px 2px 8px ${GOLDEN_SHADOW});
  }
  .fortune-cookie_emoji {
    font: 4rem/8rem emoji;
    display: block;
  }
  @media (max-width: 500px) {
    .fortune-cookie_emoji {
      font: 2rem/4rem emoji;
    }
  }
  .fortune-cookie_source > a {
    color: green;
    font-family: Caveat;
    &:visited {
      color: teal;
    }
    &:hover {
      color: ${GOLDEN_SHADOW};
      transition: color 0.2s;
    }
  }
`
