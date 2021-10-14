import { PANIC_ROOM_PREFERENCES } from 'constants/theme'
import { isClient } from './env'

import { Preferences } from 'types'

const lightTheme = {
  text: '#030623',
  alert: '#4c1130',
  accent: '#073763',
  background: '#fafbfc',
}

const darkTheme = {
  text: '#fafbfc',
  alert: '#4c1130',
  accent: '#76a5af',
  background: '#030623',
}

export const isDarkMode = (): boolean =>
  isClient() &&
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches

export const theme = {
  lightTheme,
  darkTheme,
}

export const hasUserPreferences = (): boolean => {
  if (!isClient()) return false

  const userPreferences = localStorage.getItem(PANIC_ROOM_PREFERENCES)
  return Boolean(userPreferences)
}

export const setUserPreferences = (preferences: Preferences): void => {
  if (!isClient()) return
  localStorage.setItem(PANIC_ROOM_PREFERENCES, JSON.stringify(preferences))
}
