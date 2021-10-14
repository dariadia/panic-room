import { PANIC_ROOM_PREFERENCES } from 'constants/theme'
import { isClient } from './env'

import { Preferences } from 'types'

const lightTheme = {
  text: '#302119',
  alert: '#4c1130',
  accent: '#073763',
  background: '#fafbfc',
}

const darkTheme = {
  text: '#fafbfc',
  alert: '#4c1130',
  accent: '#76a5af', // or try #d0e0e3
  background: '#302119',
}

export const isDarkMode = () =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

export const theme = {
  lightTheme,
  darkTheme,
}

export const defaultTheme = darkTheme

export const hasUserPreferences = (): boolean => {
  if (!isClient()) return false

  const userPreferences = localStorage.getItem(PANIC_ROOM_PREFERENCES)
  return Boolean(userPreferences)
}

export const setUserPreferences = (preferences: Preferences): void => {
  if (!isClient()) return
  localStorage.setItem(PANIC_ROOM_PREFERENCES, JSON.stringify(preferences))
}
