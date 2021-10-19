import React, { useState, useContext, useEffect } from 'react'
import styled, { ThemeContext } from 'styled-components'

type ModeIconProps = {
  isDarkMode: boolean
  type?: string
  onClick?: () => void
}

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
    height: 48px;
    width: 48px;
    transition: transform 600ms cubic-bezier(0.02, 0.94, 0.09, 0.97);
    background: url(../assets/${({ isDarkMode }) =>
      isDarkMode ? 'dark.svg' : 'light.svg'});
    background-size: contain;
  }
`

export const ModeSwitcher: React.FC = () => {
  const { darkModeActive, switchToDarkMode, switchToLightMode } = useContext(
    ThemeContext,
  )
  const [isDarkMode, toggleMode] = useState(darkModeActive)

  useEffect(() => {
    if (isDarkMode !== darkModeActive) {
      toggleMode(darkModeActive)
    }
  }, [darkModeActive, isDarkMode])

  const onModeClick = () => {
    toggleMode(!isDarkMode)
    return isDarkMode ? switchToLightMode() : switchToDarkMode()
  }

  return <ModeIcon isDarkMode={isDarkMode} onClick={onModeClick} />
}
