import {
  ANGLO_SAXON_RUNES_NAMES,
  ANGLO_SAXON_RUNES,
  ANGLO_SAXON_RUNES_COUNT,
  Rune,
} from 'constants/runes'

export const getRandomInt = (max: number): number =>
  Math.floor(Math.random() * max)

export const scrambleId = (id: number): string => {
  const key =
    id <= ANGLO_SAXON_RUNES_COUNT
      ? ANGLO_SAXON_RUNES_NAMES[id]
      : ANGLO_SAXON_RUNES_NAMES[Math.round(id / 13)]

  const keyRune = ANGLO_SAXON_RUNES[key as Rune]

  return `${keyRune.unicode.charCodeAt(0)}${keyRune.letter.toUpperCase()}${id}`
}

export const descrambleId = (id: string): number => Number(/\d+$/.exec(id))
