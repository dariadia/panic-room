import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { TEXTS } from 'constants/texts'
import { HOME } from 'constants/locations'
import { isClient } from 'utils/env'

export const HomeButton: React.FC = () => {
  if (isClient() && window.location.pathname === HOME) return null

  return (
    <Link href={HOME}>
      <StyledButton>🏡 {TEXTS.home}</StyledButton>
    </Link>
  )
}

const StyledButton = styled('button')`
  cursor: pointer;
`
