import { DARK, LIGHT, PANIC_ROOM_PREFERENCES } from 'constants/theme'
import { isClient } from './env'

import { Preferences } from 'types'

const lightTheme = {
  text: '#030623',
  alert: '#4c1130',
  accent: '#073763',
  background: '#fafbfc',
  brand: 'aqua',
}

const darkTheme = {
  text: '#fafbfc',
  alert: '#4c1130',
  accent: '#76a5af',
  background: '#030623',
  brand: 'blue',
}

export const theme = {
  lightTheme,
  darkTheme,
}

export const AVAILABLE_MODES = [DARK, LIGHT]

export const defaultPreferences = {
  allowMotion: true,
  allowSounds: true,
}

export const hasUserPreferences = (): boolean => {
  if (!isClient()) return false

  const userPreferences = localStorage.getItem(PANIC_ROOM_PREFERENCES)
  return Boolean(userPreferences)
}

export const setUserPreferences = (preferences: Preferences): void => {
  if (!isClient()) return
  localStorage.setItem(PANIC_ROOM_PREFERENCES, JSON.stringify(preferences))
  window.location.reload()
}
