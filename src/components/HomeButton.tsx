import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { TEXTS } from 'constants/texts'
import { HOME } from 'constants/locations'

import { NAVIGATION } from 'constants/arias'

import { isClient } from 'utils/env'

import { Emoji } from '.'

export const HomeButton: React.FC = () => {
  if (isClient() && window.location.pathname === HOME) return null

  return (
    <Link href={HOME}>
      <StyledButton>
        <Emoji label="home">🏡</Emoji> {TEXTS.home}
      </StyledButton>
    </Link>
  )
}

const StyledButton = styled('button').attrs({
  role: NAVIGATION,
  'aria-label': 'Home button',
})`
  cursor: pointer;
`
