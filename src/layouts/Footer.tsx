import React from 'react'
import styled from 'styled-components'
import { DANNI_GITHUB, DANNI_LOGIN } from 'constants/locations'

const PROJECT_START_YEAR = 2021
const currentYear = new Date().getFullYear()

export const FOOTER_HEIGHT = 24

export const Footer: React.FC = styled('footer').attrs({
  children: (
    <>
      <a href={DANNI_GITHUB} target="_blank">
        {DANNI_LOGIN} ©
      </a>
      <span>
        2021{currentYear !== PROJECT_START_YEAR && ` – ${currentYear}`}
      </span>
    </>
  ),
})`
  height: ${FOOTER_HEIGHT}px;
`
