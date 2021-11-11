import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { TEXTS } from 'constants/texts'
import { HOME } from 'constants/locations'

export const HomeButton: React.FC = () => (
  <Link href={HOME}>
    <StyledButton>🏡 {TEXTS.home}</StyledButton>
  </Link>
)

const StyledButton = styled('button')`
  cursor: pointer;
`
