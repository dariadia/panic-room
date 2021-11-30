import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

import { Footer, FOOTER_HEIGHT } from './Footer'
import { HomeButton } from '@/components'
import { MAIN_PADDING } from 'utils/theme'

import { HOME } from 'constants/locations'

import { SinglePage, Theme } from 'types'

export const Body: React.FC<{ theme: Theme }> = styled('div')`
  background: ${({ theme }) => theme.background};
  transition: background-color 400ms ease;
  color: ${({ theme }) => theme.text};
  min-width: 100vw;
  min-height: 100vh;
  padding: ${MAIN_PADDING}px;
  a {
    text-decoration: none;
    &:visited {
      color: ${({ theme }) => theme.text};
    }
    &:hover {
      color: ${({ theme }) => theme.accent};
      transition: color 0.2s;
    }
  }
`

const Main = styled('main')`
  min-height: calc(100vh - ${FOOTER_HEIGHT}px - ${MAIN_PADDING * 2}px);
  height: fit-content;
  width: calc(100vw - ${MAIN_PADDING * 2}px);
  position: relative;
  overflow: clip;
  overflow-clip-margin: ${MAIN_PADDING}px;
`

export const MainLayout: React.FC<SinglePage> = ({ url }) => {
  const { darkModeActive, theme } = useContext(ThemeContext)

  return (
    <Body theme={darkModeActive ? theme.darkTheme : theme.lightTheme}>
      <button onClick={() => alert('hello!')}>hello world</button>
      {url !== HOME && <HomeButton />}
      <Main>hello world</Main>
      <Footer
        color={darkModeActive ? theme.darkTheme.text : theme.lightTheme.text}
      />
    </Body>
  )
}
