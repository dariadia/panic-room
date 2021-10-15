import React, { useState } from 'react'
import styled from 'styled-components'

import { useDarkMode } from 'next-dark-mode'

type ModeIconProps = {
  isDarkMode: boolean
  type?: string
  onClick?: () => void
}

const ModeIcon: React.FC<ModeIconProps> = styled('input').attrs({
  type: 'radio',
})<ModeIconProps>`
  background: url(../assets/${({ isDarkMode }) =>
    isDarkMode ? 'dark.svg' : 'light.svg'});
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
