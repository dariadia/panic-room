import { DARK, LIGHT } from 'constants/theme'

export const GOLDEN_SHADOW = 'hsl(46deg,65%,52%)'
export const BLUE_SHADOW = 'hsl(220deg 60% 50%)'

const lightTheme = {
  text: '#030623',
  alert: '#4c1130',
  accent: '#073763',
  background: '#fafbfc',
  brand: 'aqua',
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
