import {
  ANGLO_SAXON_RUNES,
  ANGLO_SAXON_RUNES_COUNT,
  Rune,
} from 'constants/runes'

export const getRandomInt = (max: number): number =>
  Math.floor(Math.random() * max)

export const scrambleId = (id: number): string => {
  const key =
    id <= ANGLO_SAXON_RUNES_COUNT
      ? ANGLO_SAXON_RUNES[(id as unknown) as Rune]
      : ANGLO_SAXON_RUNES[((id / 13) as unknown) as Rune]
  return `${key.unicode.charCodeAt(0)}${key.letter.toUpperCase()}${id}`
}

export const descrambleId = (id: string): number => Number(/\d+$/.exec(id))
