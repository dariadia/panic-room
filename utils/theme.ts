import { ALLOW_MOTION, ALLOW_SOUNDS, DARK, LIGHT } from 'constants/theme'

export const GOLDEN_SHADOW = 'hsl(46deg,65%,52%)'
export const BLUE_SHADOW = 'hsl(220deg 60% 50%)'

const lightTheme = {
  text: '#030623',
  alert: '#4c1130',
  accent: '#073763',
  background: '#fafbfc',
  brand: '#57cbf5',
  brandShadow: '#09759c',
  stars: {
    shine: ['#6a8eff', '#e9987e', '#f4aaaa', '#9eb6f7'],
    line: 'rgba(0, 0, 0, 0.5)',
    twinkle: 'gold',
  },
}

const darkTheme = {
  text: '#fafbfc',
  alert: '#4c1130',
  accent: '#76a5af',
  background: '#030623',
  brand: 'blue',
  brandShadow: '#4040ff',
  stars: {
    shine: ['#b6c8ff', '#f4ccbf', '#f4aaaa', '#b6c8f9'],
    line: 'rgba(246, 218, 230, 0.65)',
    twinkle: 'white',
  },
}

export const theme = {
  lightTheme,
  darkTheme,
}

export const AVAILABLE_MODES = [DARK, LIGHT]

export const getValueFromCookieString = ({
  cookie,
  value,
}: {
  cookie: string
  value: typeof ALLOW_MOTION | typeof ALLOW_SOUNDS
}): boolean => {
  let match
  if (value === ALLOW_MOTION) {
    match = /(?<=allowMotion.{6})\w+/.exec(cookie)
  } else {
    match = /(?<=allowSounds.{6})\w+/.exec(cookie)
  }
  const matchedString = match && match[0]

  return matchedString === 'true'
}
