import { DARK, LIGHT } from 'constants/theme'

export const GOLDEN_SHADOW = 'hsl(46deg,65%,52%)'
export const BLUE_SHADOW = 'hsl(220deg 60% 50%)'

const lightTheme = {
  text: '#030623',
  alert: '#4c1130',
  accent: '#073763',
  background: '#fafbfc',
  brand: 'aqua',
}

const darkTheme = {
  text: '#fafbfc',
  alert: '#4c1130',
  accent: '#76a5af',
  background: '#030623',
  brand: 'blue',
}

export const theme = {
  lightTheme,
  darkTheme,
}

export const AVAILABLE_MODES = [DARK, LIGHT]
