import React, { Dispatch, SetStateAction, useContext, useState } from 'react'
import styled, { ThemeContext } from 'styled-components'

import { useCookies } from 'react-cookie'
import { PreferenceCheckbox } from '.'
import { TEXTS } from 'constants/texts'
import {
  PANIC_ROOM_PREFERENCES,
  DEFAULT_PREFERENCES,
  ALLOW_MOTION,
  ALLOW_SOUNDS,
} from 'constants/theme'

import { BLUE_SHADOW, GOLDEN_SHADOW } from 'utils/theme'

import { Theme } from 'types'
import { ALLOW_SOUNDS_ARIA, ALLOW_MOTION_ARIA } from 'constants/arias'

export const WelcomeScreen: React.FC<{ theme: Theme }> = styled('div')<{
  theme: Theme
}>`
  min-width: 260px;
  width: fit-content;
  max-width: calc(100% - 32px);
  min-height: 50vh;
  margin: 8px auto 0;
  filter: drop-shadow(1px 2px 8px hsl(220deg 60% 50%));
  background: ${({ theme }) => theme.accent};
  border-radius: 4px;
  padding: 16px;
  color: #fafbfc;
`

const WelcomeSection = styled('section')`
  font: 18px/24px monospace;
`

const Branding = styled('span')`
  font-weight: bold;
  font-family: fantasy;
  color: ${({ color }) => color};
`

export const WelcomeMessage: React.FC<{
  triggerMenuFocus: Dispatch<SetStateAction<boolean>>
}> = ({ triggerMenuFocus }) => {
  const { darkModeActive, theme } = useContext(ThemeContext)

  const [preferences, setPreferences] = useState(DEFAULT_PREFERENCES)
  const [, setCookie] = useCookies([PANIC_ROOM_PREFERENCES])

  const savePreferences = () => {
    alert('save preferences')
    setCookie(PANIC_ROOM_PREFERENCES, JSON.stringify(preferences))
    window.location.reload()
  }

  const onCheckboxChange = (target: EventTarget & HTMLInputElement) =>
    setPreferences({ ...preferences, [target.name]: target.checked })

  return (
    <WelcomeSection>
      <p>
        {TEXTS.greeting}{' '}
        <Branding
          color={
            darkModeActive ? theme.darkTheme.brand : theme.lightTheme.brand
          }
        >
          {TEXTS.panic_room}
        </Branding>
      </p>
      <p style={{ marginBottom: '32px' }}>
        {TEXTS.greeting_intro}
        <button
          aria-controls="menu"
          onClick={() => triggerMenuFocus(true)}
          style={{ cursor: 'pointer' }}
        >
          {TEXTS.menu}
        </button>
      </p>
      <article>
        <PreferenceCheckbox
          aria-label={ALLOW_MOTION_ARIA}
          id={TEXTS.motion}
          name={ALLOW_MOTION}
          onChange={onCheckboxChange}
          color={
            darkModeActive ? theme.darkTheme.brand : theme.lightTheme.brand
          }
          shadow={darkModeActive ? BLUE_SHADOW : GOLDEN_SHADOW}
          checked={preferences?.allowMotion}
        >
          <span>{TEXTS.motion}</span>
        </PreferenceCheckbox>
        <PreferenceCheckbox
          aria-label={ALLOW_SOUNDS_ARIA}
          id={TEXTS.sounds}
          name={ALLOW_SOUNDS}
          onChange={onCheckboxChange}
          color={
            darkModeActive ? theme.darkTheme.brand : theme.lightTheme.brand
          }
          shadow={darkModeActive ? BLUE_SHADOW : GOLDEN_SHADOW}
          checked={preferences?.allowSounds}
        >
          <span>{TEXTS.sounds}</span>
        </PreferenceCheckbox>
        <Button onClick={savePreferences}>{TEXTS.save}</Button>
      </article>
    </WelcomeSection>
  )
}

type ButtonProps = {
  marginTop?: number
  onClick: () => void
  as?: 'span'
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Button: React.FC<ButtonProps> = styled('button').attrs(
  (props: ButtonProps) => ({
    as: props.as,
  }),
)<ButtonProps>`
  cursor: pointer;
  margin-top: ${({ marginTop = '36' }) => `${marginTop}px`};
  display: block;
  ${({ as }) =>
    as
      ? `border: 1px solid gold;
      border-radius: 4px;
      padding: 4px;
      &:hover {
    filter: drop-shadow(1px 2px 8px ${GOLDEN_SHADOW}) invert(0.3);
    transition: filter 0.2s;
  }`
      : ''}
`
