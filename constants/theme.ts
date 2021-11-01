import { Preferences } from 'types'

export const DEFAULT_PREFERENCES: Preferences = {
  allowMotion: true,
  allowSounds: true,
} as const

export const PANIC_ROOM_PREFERENCES = 'panic-room-preferences'

export const LIGHT = 'light'
export const DARK = 'dark'
