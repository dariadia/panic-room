import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

import { Footer } from '.'

import { isDarkMode } from 'utils/theme'

import { Theme } from 'types'

export const Body: React.FC<{ theme: Theme }> = styled('div')`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-width: 100vw;
  min-height: 100vh;
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

export const MainLayout: React.FC = ({ children }) => {
  const theme = useContext(ThemeContext)
  const userTheme = isDarkMode() ? theme.darkTheme : theme.lightTheme

  return (
    <Body theme={userTheme}>
      <main>{children}</main> <Footer />
    </Body>
  )
}
