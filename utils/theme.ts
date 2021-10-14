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

export const isDarkMode = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

export const theme = {
  lightTheme,
  darkTheme,
}
