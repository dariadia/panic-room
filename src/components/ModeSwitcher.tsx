import React, { useState } from 'react'
import styled from 'styled-components'

import { useDarkMode } from 'next-dark-mode'
import { FOOTER_HEIGHT } from '@/layouts'

type ModeIconProps = {
  isDarkMode: boolean
  type?: string
  onClick?: () => void
}

const ICON_HEIGHT = FOOTER_HEIGHT * 2

const ModeIcon: React.FC<ModeIconProps> = styled('input').attrs({
  type: 'radio',
})<ModeIconProps>`
  position: relative;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  &:after {
    content: '';
    position: absolute;
    top: -40px;
    left: -40px;
    height: ${ICON_HEIGHT}px;
    width: ${ICON_HEIGHT}px;
    transition: transform 600ms cubic-bezier(0.02, 0.94, 0.09, 0.97);
    background: url(../assets/${({ isDarkMode }) =>
      isDarkMode ? 'dark.svg' : 'light.svg'});
    background-size: contain;
  }
`

export const ModeSwitcher: React.FC = () => {
  const { darkModeActive, switchToDarkMode, switchToLightMode } = useDarkMode()
  const [isDarkMode, toggleMode] = useState(darkModeActive)

  const onModeClick = () => {
    toggleMode(!isDarkMode)
    return isDarkMode ? switchToLightMode() : switchToDarkMode()
  }

  return <ModeIcon isDarkMode={isDarkMode} onClick={onModeClick} />
}