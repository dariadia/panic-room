import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Theme } from 'types'

import { Footer } from '.'

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
    }
  }
`

export const MainLayout: React.FC = ({ children }) => {
  const theme = useContext(ThemeContext)
  return (
    <Body theme={theme}>
      <main>{children}</main> <Footer />
    </Body>
  )
}
