import React from 'react'
import styled from 'styled-components'

import { DANNI_GITHUB, DANNI_LOGIN } from 'constants/locations'

import { ModeSwitcher } from '@/components'

const PROJECT_START_YEAR = 2021
const currentYear = new Date().getFullYear()

export const FOOTER_HEIGHT = 24

export const Footer: React.FC = styled('footer').attrs({
  children: (
    <>
      <span>
        <a href={DANNI_GITHUB} target="_blank">
          👩🏽‍🦰 {DANNI_LOGIN} ©
        </a>{' '}
        {PROJECT_START_YEAR}
        {currentYear !== PROJECT_START_YEAR && ` – ${currentYear}`}
      </span>
      <ModeSwitcher />
    </>
  ),
})`
  height: ${FOOTER_HEIGHT}px;
  display: flex;
  justify-content: space-between;
  align-items: end;
`
