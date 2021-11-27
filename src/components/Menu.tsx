import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useState,
  useRef,
  useEffect,
} from 'react'
import styled, { ThemeContext } from 'styled-components'
import { useCookies } from 'react-cookie'

import { GOLDEN_SHADOW, BLUE_SHADOW } from 'utils/theme'
import {
  ALLOW_MOTION,
  ALLOW_SOUNDS,
  DEFAULT_PREFERENCES,
  PANIC_ROOM_PREFERENCES,
} from 'constants/theme'
import { TEXTS } from 'constants/texts'
import {
  ALLOW_MOTION_ARIA,
  ALLOW_SOUNDS_ARIA,
  NAVIGATION,
  SETTINGS_MENU,
} from 'constants/arias'

import { Button, Emoji, PreferenceCheckbox } from '.'

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

  const [cookies, setCookie] = useCookies([PANIC_ROOM_PREFERENCES])
  const userPreferences = cookies[PANIC_ROOM_PREFERENCES] || DEFAULT_PREFERENCES
  const [preferences, setPreferences] = useState(userPreferences)
  const onCheckboxChange = (target: EventTarget & HTMLInputElement) =>
    setPreferences({ ...preferences, [target.name]: target.checked })

  const savePreferences = () => {
    setCookie(PANIC_ROOM_PREFERENCES, JSON.stringify(preferences))
    window.location.reload()
  }

  return (
    <Menu
      ref={menuRef}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onClick={(event: Event) => onMenuClick(event.target)}
    >
      <Emoji label="cog">⚙️</Emoji>
      {isMenuOpen && (
        <MenuDropdown
          id={MENU_ID}
          theme={darkModeActive ? theme.darkTheme : theme.lightTheme}
        >
          <PreferenceCheckbox
            aria-label={ALLOW_MOTION_ARIA}
            checked={preferences?.allowMotion}
            labelId={MENU_OPTION_MOTION}
            id={TEXTS.motion}
            name={ALLOW_MOTION}
            onChange={onCheckboxChange}
            color="gold"
            shadow={darkModeActive ? GOLDEN_SHADOW : BLUE_SHADOW}
          >
            <span>{TEXTS.motion}</span>
          </PreferenceCheckbox>
          <PreferenceCheckbox
            aria-label={ALLOW_SOUNDS_ARIA}
            checked={preferences?.allowSounds}
            labelId={MENU_OPTION_SOUNDS}
            id={TEXTS.sounds}
            name={ALLOW_SOUNDS}
            onChange={onCheckboxChange}
            color="gold"
            shadow={darkModeActive ? GOLDEN_SHADOW : BLUE_SHADOW}
          >
            <span style={{ lineHeight: 2 }}>{TEXTS.sounds}</span>
          </PreferenceCheckbox>
          <Button onClick={savePreferences} marginTop={24} as="span">
            {TEXTS.save}
          </Button>
        </MenuDropdown>
      )}
    </Menu>
  )
}

const MenuDropdown = styled('nav')`
  position: absolute;
  padding: 16px;
  background: ${({ theme }) => theme.brand};
  color: ${({ theme }) => theme.text};
  border-radius: 4px;
`

export const Menu = styled('button').attrs({
  id: 'menu',
  role: NAVIGATION,
  'aria-label': SETTINGS_MENU,
})`
  background: transparent;
  border: none;
  padding: 8px;
  border-radius: 100%;
  position: absolute;
  z-index: 2;
  top: 14px;
  cursor: pointer;
  :focus {
    outline: none;
    filter: drop-shadow(1px 2px 8px hsl(220deg 60% 50%));
    background: gold;
  }
  :hover {
    background: rgb(100%, 84%, 0%, 0.8);
    cursor: pointer;
    transition: all 0.2s;
  }
`
