import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

import { Footer, FOOTER_HEIGHT } from './Footer'

import { Theme } from 'types'

const MAIN_PADDING = 24

export const Body: React.FC<{ theme: Theme }> = styled('div')`
  background: ${({ theme }) => theme.background};
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
`

export const MainLayout: React.FC = ({ children }) => {
  const theme = useContext(ThemeContext)

  return (
    <Body theme={theme}>
      <Main>{children}</Main> <Footer />
    </Body>
  )
}
