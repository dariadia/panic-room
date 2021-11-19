export const getTimeInSeconds = ({
  days = 0,
  hours = 0,
  minutes = 0,
  seconds = 0,
}: {
  days?: number
  hours?: number
  minutes?: number
  seconds?: number
}): number => seconds + minutes * 60 + hours * 60 * 60 + days * 24 * 60 * 60
