import { Preferences } from 'types'

export const ALLOW_MOTION = 'allowMotion'
export const ALLOW_SOUNDS = 'allowSounds'

export const DEFAULT_PREFERENCES: Preferences = {
  [ALLOW_MOTION]: true,
  [ALLOW_SOUNDS]: true,
} as const

export const PANIC_ROOM_PREFERENCES = 'panic-room-preferences'
export const FORTUNE_COOKIE = 'fortune-cookie'

export const LIGHT = 'light'
export const DARK = 'dark'

export const SHARE_ICON_SIZE = 32
