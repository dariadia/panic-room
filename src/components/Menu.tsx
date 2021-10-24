import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useState,
  useRef,
  useEffect,
} from 'react'
import styled, { ThemeContext } from 'styled-components'

import {
  defaultPreferences,
  GOLDEN_SHADOW,
  BLUE_SHADOW,
  setUserPreferences,
} from 'utils/theme'
import { Button, PreferenceCheckbox } from '.'

export const MenuWrapper: React.FC<{
  isMenuFocused: boolean
  triggerMenuFocus: Dispatch<SetStateAction<boolean>>
}> = ({ isMenuFocused, triggerMenuFocus }) => {
  const { darkModeActive, theme } = useContext(ThemeContext)

  const [isMenuOpen, triggerMenuOpen] = useState(false)

  const menuRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (isMenuFocused && menuRef.current) {
      menuRef.current.focus()
      triggerMenuFocus(false)
      setTimeout(() => menuRef.current?.blur(), 800)
    }
  }, [isMenuFocused, triggerMenuFocus])

  const MENU_ID = 'menu-dropdown'
  const MENU_OPTION_MOTION = 'menu-option-motion'
  const MENU_OPTION_SOUNDS = 'menu-option-sounds'

  const MENU_IDs = [MENU_ID, MENU_OPTION_MOTION, MENU_OPTION_SOUNDS]
  const onMenuClick = (target?: EventTarget & HTMLInputElement) => {
    if (!target) return
    setTimeout(() => menuRef.current?.blur(), 800)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const parentNodeId = target.parentNode?.id
    const targetId = target?.id

    if (!parentNodeId && !targetId) {
      triggerMenuOpen(!isMenuOpen)
    } else if (parentNodeId && !MENU_IDs.includes(parentNodeId as string)) {
      triggerMenuOpen(!isMenuOpen)
    }
  }

  const [preferences, setPreferences] = useState(defaultPreferences)
  const onCheckboxChange = (target: EventTarget & HTMLInputElement) =>
    setPreferences({ ...preferences, [target.name]: target.checked })

  return (
    <Menu
      ref={menuRef}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onClick={(event: Event) => onMenuClick(event.target)}
    >
      <span>⚙️</span>
      {isMenuOpen && (
        <MenuDropdown
          id={MENU_ID}
          theme={darkModeActive ? theme.darkTheme : theme.lightTheme}
        >
          <PreferenceCheckbox
            labelId={MENU_OPTION_MOTION}
            id={'motion'}
            name="allowMotion"
            onChange={onCheckboxChange}
            color="gold"
            shadow={darkModeActive ? GOLDEN_SHADOW : BLUE_SHADOW}
          >
            <span>{'motion'}</span>
          </PreferenceCheckbox>
          <PreferenceCheckbox
            labelId={MENU_OPTION_SOUNDS}
            id={'sounds'}
            name="allowSounds"
            onChange={onCheckboxChange}
            color="gold"
            shadow={darkModeActive ? GOLDEN_SHADOW : BLUE_SHADOW}
          >
            <span style={{ lineHeight: 2 }}>{'sounds'}</span>
          </PreferenceCheckbox>
          <Button
            onClick={() => setUserPreferences(preferences)}
            marginTop={24}
            as="span"
          >
            {'save'}
          </Button>
        </MenuDropdown>
      )}
    </Menu>
  )
}

const MenuDropdown = styled('div')`
  position: absolute;
  padding: 16px;
  background: ${({ theme }) => theme.brand};
  color: ${({ theme }) => theme.text};
  border-radius: 4px;
`

export const Menu = styled('button')`
  background: transparent;
  border: none;
  padding: 8px;
  border-radius: 100%;
  position: absolute;
  z-index: 2;
  top: 14px;
  :focus {
    outline: none;
    filter: drop-shadow(1px 2px 8px hsl(220deg 60% 50%));
    background: gold;
  }
`
