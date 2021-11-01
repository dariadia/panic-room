export interface Preferences {
  allowMotion: readonly boolean
  allowSounds: readonly boolean
}

export type Preference = keyof Preferences
